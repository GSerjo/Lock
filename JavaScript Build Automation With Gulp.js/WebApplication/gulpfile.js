var gulp = require('gulp');

//var jshint = require('gulp-jshint');
//var jscs = require('gulp-jscs');
//var util = require('gulp-util');
//var gulpprint = require('gulp-print');

var $ = require('gulp-load-plugins')({lazy: true});


gulp.task('hello-world', function () {
    log('Analyzing source with JSHINT and JSCS');

    return gulp.src(['./ScriptsCustom/**/*.js'])
               .pipe($.print())
               .pipe($.jscs())
               .pipe($.jshint())
               .pipe($.jshint.reporter('jshint-stylish', { verbose: true }));
});

function log(message) {
    if (typeof (message) === 'object') {
        for (var item in message) {
            if (message.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(message[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(message));
    }
}