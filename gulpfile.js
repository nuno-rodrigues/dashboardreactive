var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browsersync = require("browser-sync").create();

function styles() {
    return gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
}

function browserSync(done) {
    browsersync.init({
        server: {
        baseDir: ""
        },
        port: 5000,
        startPath: ''
    });
    done();
}

function watch() {
    return gulp.watch('sass/**/*.scss', gulp.series(styles));
}

exports.default = gulp.series(gulp.parallel(styles, browserSync, watch));