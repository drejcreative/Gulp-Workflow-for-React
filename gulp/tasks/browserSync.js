const gulp        = require('gulp'),
      browserSync = require('browser-sync');

    const jsFiles   = "app/js/**/*.js";

module.exports = function() {

  gulp.task('sync', ['html'], function() {

    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch("app/index.html", ['html']);
    gulp.watch(jsFiles, ['browserify']);
    gulp.watch('app/images/svg/*.svg', ['spriteSvg']);

    browserSync.init({
      server: {
        baseDir: './build',
        routes: {
            '/bower_components': 'bower_components'
        }
      },
      port: 4000,
      notify: false,
      ui: {
        port: 4001
      }
    });
  });

};
