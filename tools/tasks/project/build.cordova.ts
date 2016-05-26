/**
 * @description
 * 	copy build files to hybrid www folder
 * 	If ENV is dev, copy from dist/dev/ to hybrid/www/
 * 	If ENV is prod, copy from dist/prod/ to hybrid/www/
 */
import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import {join} from 'path';
import {APP_DEST, MOBILE_APP_DEST} from '../../config';
import {templateLocals} from '../../utils';
const plugins = <any>gulpLoadPlugins();

export = () => {
  let src = [
    join(APP_DEST, '**/*.*')
  ];

  return gulp.src(src)
    .pipe(plugins.template(templateLocals()))
    .pipe(gulp.dest(MOBILE_APP_DEST));
};
