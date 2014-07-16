var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var mocha = require('gulp-mocha');

gulp.task('compile', function() {
  gulp.src(['./src/*.coffee', './src/**/*.coffee'])
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./lib/'));
  });

gulp.task('mocha', function () {
  gulp.src('./test/*.js')
    .pipe(
      mocha({ reporter: 'list' })
        .on('error', gutil.log)
    );
});

gulp.task('watch', function() {
  gulp.watch(['./src/*.coffee', './src/**/*.coffee', './src/../../*.coffee'], ['compile', 'mocha']);
  gulp.watch(['./test/*.js'], ['mocha']);
});

gulp.task('default', ['compile']);
