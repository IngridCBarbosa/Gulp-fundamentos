const gulp = require('gulp');
const webserver = require('gulp-webserver');
const watch = require('gulp-watch');


function monitorarArquivos() {
    return gulp.src('build')
        .pipe(webserver({
            port: 3333,
            open: true,
            livereload: true,
        }))
}

function servidor(callback) {
    
    watch('src/**/*.html', () => gulp.series('appHTML')());
    watch('src/**/*.scss', () => gulp.series('appCSS')());
    watch('src/**/*.js', () => gulp.series('appJS')());
    watch('src/assets/img/**/*.*', () => gulp.series('appIMG'));
    
    return callback();
}

module.exports = {
    monitorarArquivos,
    servidor
}