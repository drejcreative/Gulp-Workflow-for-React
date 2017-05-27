const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      sourcemaps = require('gulp-sourcemaps'),
      browserSync = require('browser-sync'),
      pxtorem = require('gulp-pxtorem');

      // #Autiprefixer options
      const autoprefixerOptions = {
        browsers: ['last 20 versions', '> 5%', 'Firefox ESR']
      };

      const pxtoremOptions = {
          replace: false
      };
      

module.exports = function() {

    // #Scss with Autoprefixer - Adding all cross browser prefixes
    gulp.task('sass', function() {
      return gulp.src('app/scss/**/*.scss')       // # Gets all files ending with .scss in app/scss and children dirs
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))  // # Passes it through a gulp-sass
        .pipe(sourcemaps.write())
        .pipe(autoprefixer(autoprefixerOptions))  // # Adding cross browser prefixes
        .pipe(pxtorem(pxtoremOptions))            // # Converting PX to Rem with px fallback for older browsers
        .pipe(gulp.dest('./build/css/'))               // # Outputs it in the css folder
        .pipe(browserSync.reload({
          stream: true
        }));
    });

};
