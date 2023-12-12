const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')

gulp.task('sass', function (done) {
  gulp.src('src/scss/squid.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(gulp.dest('src/docs/public/css'))
  done()
})

gulp.task('concat', function (done) {
  gulp.src('src/js/**/*.js')
    .pipe(concat('squid.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(gulp.dest('src/docs/public/js'))
  done()
})

gulp.task('scripts', function (done) {
  gulp.src('src/js/**/*.js')
    .pipe(concat('squid.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(gulp.dest('src/docs/public/js'))
  done()
})

gulp.task('watch-js', function (done) {
  gulp.watch('src/js/**/*.js', gulp.series('concat'))
  done()
})

gulp.task('watch', function (done) {
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'))
  gulp.watch('src/js/**/*.js', gulp.series('concat'))
  done()
})
