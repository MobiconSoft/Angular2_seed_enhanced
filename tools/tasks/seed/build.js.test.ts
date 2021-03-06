import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join} from 'path';

import { APP_DEST, APP_SRC, BOOTSTRAP_MODULE, TOOLS_DIR } from '../../config';
import { templateLocals, makeTsProject } from '../../utils';

const plugins = <any>gulpLoadPlugins();

/**
 * Executes the build process, transpiling the TypeScript files (excluding the spec and e2e-spec files) for the test
 * environment.
 * 
 * This is sass seed. so, change task process 
 * reference: https://github.com/archfirst/angular2-seed-sass/blob/master/tools/tasks/seed/build.js.test.ts
 * @author pyun@tidemark.com
 */
export = () => {
  let tsProject = makeTsProject();
  let src = [
    'typings/index.d.ts',
    TOOLS_DIR + '/manual_typings/**/*.d.ts',
    join(APP_SRC, '**/*.ts'),
    '!' + join(APP_SRC, '**/*.e2e-spec.ts'),
    '!' + join(APP_SRC, `${BOOTSTRAP_MODULE}.ts`)
  ];
  // let result = gulp.src(src)
  //   .pipe(plugins.plumber())
  //   .pipe(plugins.sourcemaps.init())
  //   .pipe(plugins.inlineNg2Template({
  //     base: APP_SRC,
  //     useRelativePaths: true
  //   }))
  //   .pipe(plugins.typescript(tsProject));

  // return result.js
  //   .pipe(plugins.sourcemaps.write())
  //   .pipe(gulp.dest(APP_DEST));
  
  let result = gulp.src(src)
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.typescript(tsProject));

  return result.js
    .pipe(plugins.sourcemaps.write())
    .pipe(plugins.template(templateLocals()))
    .pipe(gulp.dest(APP_DEST));
};
