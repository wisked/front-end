var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var src = {
	scss: 'sass/**/*.scss',
	css: 'css/',
	html: './*.html',
    	js: 'js/*.js'
};

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync({
        server: "./"
    });

    gulp.watch(src.scss, ['sass']);
    gulp.watch(src.html).on('change', reload);
    gulp.watch(src.js).on('change', reload);
});

// Compile sass into CSS
gulp.task('sass', function() {
    return gulp.src(src.scss)
        .pipe(sass())
        .pipe(gulp.dest(src.css))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);

// gulp.task('sass', function () {
// 	return gulp.src('./sass/**/*.scss')
// 	.pipe(sass().on('error', sass.logError))
// 	.pipe(gulp.dest('./css'));
// });

// gulp.task('sass:watch', function () {
// 	gulp.watch('./sass/**/*.scss', ['sass']);
// });
