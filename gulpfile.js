'use strict';

const gulp = require('gulp'),
    { watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return gulp.src('./assets/scss/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
};

exports.buildStyles = buildStyles;

// exports.watch = function () {
//     gulp.watch('./assets/sass/*.scss', ['sass']);
// };

gulp.task('watch', function () {
    // Endless stream mode
    // return watch('./assets/scss/*.scss', { ignoreInitial: false })
    //     .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    //     .pipe(gulp.dest('./assets/css'));

    watch('./assets/scss/*.scss', series(buildStyles));
});