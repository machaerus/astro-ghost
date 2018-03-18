'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

// gulp.task('sass', function () {
//   return gulp.src('./assets/scss/**.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./assets/built'));
// });

gulp.task('watch', function() {
  watch("assets/scss/*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/built'));
});