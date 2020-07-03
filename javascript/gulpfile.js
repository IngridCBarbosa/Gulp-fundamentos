const gulp = require('gulp');
const { series, parallel } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');


function padrao(callback) {

    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify()) // minifica o código
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'));

    return callback();
}

function fim(callback) {
    console.log('Fim!!');
    return callback;
}


module.exports.default = series(
    padrao,
    fim
);