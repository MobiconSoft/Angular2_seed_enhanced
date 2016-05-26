import * as gulp from 'gulp';
import * as runSequence from 'run-sequence';

import { PROJECT_TASKS_DIR, SEED_TASKS_DIR } from './tools/config';
import { loadTasks } from './tools/utils';


loadTasks(SEED_TASKS_DIR);
loadTasks(PROJECT_TASKS_DIR);


// --------------
// Build dev.
gulp.task('build.dev', (done: any) =>
  runSequence('clean.dev',
            'tslint',
            'sass-lint',
            'build.assets.dev',
            'build.html',
            'build.scss',
            'build.js.dev',
            'build.index.dev',
            done));

// --------------
// Build dev watch.
gulp.task('build.dev.watch', (done: any) =>
  runSequence('build.dev',
              'watch.dev',
              done));

// --------------
// Build e2e.
gulp.task('build.e2e', (done: any) =>
  runSequence('clean.dev',
              'tslint',
              'build.assets.dev',
              'build.html',
              'build.scss',
              'build.js.e2e',
              'build.index.dev',
              done));

// --------------
// Build prod.
gulp.task('build.prod', (done: any) =>
  runSequence('clean.prod',
              'tslint',
              'sass-lint',
              'build.assets.prod',
              'build.html',
              'build.scss',
              'copy.js.prod',
              'build.js.prod',
              'build.bundles',
              'build.bundles.app',
              'build.index.prod',
              done));

// --------------
// Build test.
gulp.task('build.test', (done: any) =>
  runSequence('clean.dev',
              'tslint',
              'build.assets.dev',
              'build.html',
              'build.scss',
              'build.js.test',
              'build.index.dev',
              done));

// --------------
// Build test watch.
gulp.task('build.test.watch', (done: any) =>
  runSequence('build.test',
              'watch.test',
              done));

// --------------
// Build tools.
gulp.task('build.tools', (done: any) =>
  runSequence('clean.tools',
              'build.js.tools',
              done));

// --------------
// Docs
// gulp.task('docs', (done: any) =>
//   runSequence('build.docs',
//               'serve.docs',
//               done));

// --------------
// Serve dev
gulp.task('serve.dev', (done: any) =>
  runSequence('build.dev',
              'server.start',
              'watch.dev',
              done));

// --------------
// Serve e2e
gulp.task('serve.e2e', (done: any) =>
  runSequence('build.e2e',
              'server.start',
              'watch.e2e',
              done));


// --------------
// Serve prod
gulp.task('serve.prod', (done: any) =>
  runSequence('build.prod',
              'server.prod',
              done));


// --------------
// Test.
gulp.task('test', (done: any) =>
  runSequence('build.test',
              'karma.start',
              done));

// --------------
// Make changelog
gulp.task('version.cl', (done: any) =>
  runSequence('version.changelog',
              done));


// ----------------------
//     For Mobile
// ----------------------
// --------------
// Build dev for mobile.
gulp.task('build.dev.mobile', (done: any) =>
  runSequence('clean.dev',
              'tslint',
              'sass-lint',
              'build.assets.dev',
              'build.html',
              'build.scss',
              'build.js.dev',
              'clean.mobile',
              'build.index.dev.cordova',
              'build.cordova',
              done));

// --------------
// Build prod for mobile
gulp.task('build.prod.mobile', (done: any) =>
  runSequence('clean.prod',
              'tslint',
              'sass-lint',
              'build.assets.prod',
              'build.html',
              'build.scss',
              'copy.js.prod',
              'build.js.prod',
              'build.bundles',
              'build.bundles.app',
              'clean.mobile',
              'build.index.prod.cordova',
              'build.cordova',
              done));

// --------------
// Build Native Mobile for iOS
gulp.task('build.native.ios', (done: any) =>
  runSequence('build.cordova.native.ios',
              done));

// --------------
// Build Native Mobile for Android
gulp.task('build.native.android', (done: any) =>
  runSequence('clean.apk',
              'build.cordova.native.android',
              done));

// --------------
// Serve All / proxy / stub server
gulp.task('serve.proxy', (done: any) =>
  runSequence('proxy.server.start',
            done));

gulp.task('serve.stub', (done: any) =>
  runSequence('stub.server.start',
            done));

gulp.task('serve', (done: any) =>
  runSequence('serve.dev',
            done));
