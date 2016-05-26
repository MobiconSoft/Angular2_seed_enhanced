/**
 * @description make apk using SDK of Android
 * @plugin https://github.com/SamVerschueren/gulp-cordova-build-android
 * @author pyun@tidemark.com
 * @usage
 * Add release version)
 *  .pipe(android({release: true}))
 * Add keystore
 *  .pipe(android({storeFile: '/Path/to/key.keystore', keyAlias: 'my_alias'}))
 */
import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import {MOBILE_APP_DEST, ANDROID_APK_DEST} from '../../config';
const plugins = <any>gulpLoadPlugins();

export = () => {
    return gulp.src(MOBILE_APP_DEST)
        .pipe(plugins.cordovaBuildAndroid())
        .pipe(gulp.dest(ANDROID_APK_DEST));
};
