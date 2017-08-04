const gulp = require('gulp')
const sass = require('gulp-sass')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

gulp.task('serve', function() {
  gulp.src('./')
    .pipe(webserver({
        port:8000,
        livereload: true,
        directoryListing: true,
        open: true
    }))
})

gulp.task('vendor', function() {
    gulp.src([
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/jquery/dist/jquery.min.js',
        ])
        .pipe(gulp.dest('dist/js/'))
    gulp.src([
        'node_modules/font-awesome/fonts/*'
        ])
        .pipe(gulp.dest('dist/fonts/'))
    gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/font-awesome/css/font-awesome.min.css'
        ])
        .pipe(gulp.dest('dist/css/'))
})

gulp.task('sass', function() {
    gulp.src('src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist'))
})

gulp.task('html', function() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('./'))
})

gulp.task('watch', ['vendor', 'sass', 'html'], function() {
	return gulp.watch('src/**', ['sass', 'html'])
})

gulp.task('default', ['watch', 'serve'])
