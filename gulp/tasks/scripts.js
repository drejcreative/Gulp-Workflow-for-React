const gulp = require('gulp'),
      sourcemaps = require('gulp-sourcemaps'),
      browserSync = require('browser-sync'),
      notify        = require('gulp-notify'),
      source        = require('vinyl-source-stream'),
      browserify    = require('browserify'),
      babelify      = require('babelify');

      // Push Errors
      const interceptErrors = function(error) {
        const args = Array.prototype.slice.call(arguments);
        // Send error to notification center with gulp-notify
        notify.onError({
          title: 'Compile Error',
          message: '<%= error.message %>'
        }).apply(this, args);
        // Keep gulp from hanging on this task
        this.emit('end');
      };

module.exports = function() {

  gulp.task('browserify', ['sass'], function() {
    return browserify('./app/js/app.js')
        .transform(babelify, {
          presets: ["es2015", "react"],
          "plugins": ["react-html-attrs"]
        })
        .bundle()
        .on('error', interceptErrors)
        //.pipe(sourcemaps.init())
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('main.js'))
        // Start piping stream to tasks!
        //.pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./build/js/'))
        .pipe(browserSync.reload({
          stream: true
        }));
  });

  // Optimizing HTML and CSS files
  gulp.task('html', ['browserify'], function() {
    return gulp.src('app/index.html')
      .on('error', interceptErrors)
      .pipe(gulp.dest('./build/'));
  });

};
