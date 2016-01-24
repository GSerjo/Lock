/// <binding />
var gulp = require('gulp');

//npm install --save-dev gulp gulp-util gulp-print gulp-less gulp-autoprefixer
//var jshint = require('gulp-jshint');
//var jscs = require('gulp-jscs');
//var util = require('gulp-util');
//var gulpprint = require('gulp-print');

var del = require('del');

var $ = require('gulp-load-plugins')({lazy: true});
var config = require('./gulp.config')();

gulp.task('style-cop', function () {
    log('Analyzing source with JSHINT and JSCS');

    return gulp.src(config.alljs)
               .pipe($.print())
               .pipe($.jscs())
               .pipe($.jshint())
               .pipe($.jshint.reporter('jshint-stylish', { verbose: true }));
});

gulp.task('styles', ['clean-styles'], function () {
    log('Compiling Less -> CSS');

    return gulp.src(config.less)
               .pipe($.print())
               .pipe($.plumber())
               .pipe($.less())
               .pipe(gulp.dest(config.cssStyles));

});

gulp.task('clean-styles', function () {
    log('Clean styles');
    var files = config.cssStyles + '**/*.css';
    clean(files);
});

gulp.task('less-watcher', function () {
    gulp.watch([config.less], ['styles']);
});

function clean(path) {
    log('Cleaning' + $.util.colors.blue(path));
    del(path);
}

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