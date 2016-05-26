/**
 * @description build ios using XCode
 * @plugin https://github.com/SamVerschueren/gulp-cordova-build-ios
 */
import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import {MOBILE_APP_DEST} from '../../config';
const plugins = <any>gulpLoadPlugins();

export = () => {
    return gulp.src(MOBILE_APP_DEST)
        .pipe(plugins.cordovaBuildIos());
};
