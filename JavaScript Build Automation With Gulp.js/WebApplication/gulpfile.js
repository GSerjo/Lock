var gulp = require('gulp');

var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

gulp.task('hello-world', function () {
    return gulp.src(['./ScriptsCustom/**/*.js'])
               .pipe(jscs())
               .pipe(jshint())
               .pipe(jshint.reporter('jshint-stylish', {verbose: true}));
});