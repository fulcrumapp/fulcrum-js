var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');

gulp.task('compile', function() {
  gulp.src(['./src/*.coffee', './src/**/*.coffee'])
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./lib/'));
  });

gulp.task('watch', function() {
  gulp.watch(['./src/*.coffee', './src/**/*.coffee'], ['compile']);
});

gulp.task('default', ['compile']);
