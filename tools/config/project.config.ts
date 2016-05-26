import { join } from 'path';

import { SeedConfig } from './seed.config';
import { InjectableDependency } from './seed.config.interfaces';
import { SassOptions } from './project.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project
 * specific overrides. A few examples can be found below.
 */
export class ProjectConfig extends SeedConfig {

  /**
   * Sass Option. check typings gulp-sass
   */
  SASS_OPTIONS: SassOptions = {};

  /**
   * Additional Project config for gulp taskers
   */
   APP_TITLE = 'MobiconSoft';
   // override tidemark mobile port
   LOCAL_PORT = 9075;
   // BrowserSync admin port
   BS_PORT    = 9077;
   // weinre port
   WI_PORT    = 9078;

   // folders for mobile
   IS_MOBILE         = false;
   MOBILE_DIST_DIR   = 'src/hybrid';
   MOBILE_APP_DEST   = `${this.MOBILE_DIST_DIR}/www`;
   ANDROID_APK_DEST	= `${this.MOBILE_DIST_DIR}/apk`;

   PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';
    let additional_deps: InjectableDependency[] = [
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    const seedDependencies = this.NPM_DEPENDENCIES;

    this.NPM_DEPENDENCIES = seedDependencies.concat(additional_deps);
  }
}
