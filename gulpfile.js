var gulp = require('gulp')
var sass = require('gulp-sass')    
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')

gulp.task('sass', function(done){
  gulp.src('scss/squid.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('dist/css'))
    done()
})

gulp.task('concat', function(done){
  gulp.src('js/*.js')
    .pipe(concat('squid.js'))
    .pipe(gulp.dest('dist/js'))
    done()
})

gulp.task('scripts', function(done){
  gulp.src('js/*.js')
    .pipe(concat('squid.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    done()
})

gulp.task('watch-js', function(done){
  gulp.watch('js/*.js', gulp.series('concat'))
  done()
})

gulp.task('watch', function(done){
  gulp.watch('scss/*.scss', gulp.series('sass'))
  gulp.watch('js/*.js', gulp.series('concat'))
  done()
})