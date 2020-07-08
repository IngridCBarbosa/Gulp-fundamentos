const gulp = require('gulp');
const { series, parallel } = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglifycss');
const concat = require('gulp-concat');



function transformacaoCSS() {

    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglify({ 'uglyComments': true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function coiparHTML() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
}

exports.default = parallel(transformacaoCSS,coiparHTML);