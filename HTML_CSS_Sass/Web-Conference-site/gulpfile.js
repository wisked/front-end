var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var files = {
    scss: './content/Sass/*.scss',
    css: './content/css/*.css',
    html: './*.html',
    js: './content/js',
    css_fold: './content/css/'
};
// Compile sass into CSS
gulp.task('sass', function() {
    return gulp.src(files.scss)
        .pipe(sass())
        .pipe(gulp.dest(files.css_fold))
        .pipe(reload({stream: true}));
});
gulp.task('runServ', ['sass'], function () {
    browserSync({
        server: './'
    });
    gulp.watch(files.scss, ['sass']);
    gulp.watch(files.html).on('change', reload);
    gulp.watch(files.js).on('change', reload);
});
gulp.task('default', ['runServ']);
// gulp.task('default', function () {
// //   var files = [
// //     '*.html',
// //     'content/css/mainStyles.css'
// // ];
//
//   browserSync.init(files, {
//     server: {
//       baseDir: './'
//     }
//   });
// });
