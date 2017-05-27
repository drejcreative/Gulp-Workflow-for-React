(function() {
    "use strict";

    var gulp = require('./gulp')([
        'styles',
        'scripts',
        'icons',
        'browserSync',
        'optimization'
    ]);

    gulp.task('default', ['spriteSvg', 'sync'], function() {});
    gulp.task('build', ['sass', 'spriteSvg', 'fonts'], function() {});

}());
