'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');

var paths = {
  stylesSrc: './stylesheets/src/',
 	stylesDist: './stylesheets/dist/'
};
 
paths.scripts
gulp.task('sass', function () {
  gulp.src( paths.stylesSrc + '**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest( paths.stylesDist ));
});
 
gulp.task('default', function () {
  gulp.watch( paths.stylesSrc + '**/*.scss', ['sass']);
});