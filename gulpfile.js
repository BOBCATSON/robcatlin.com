var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('pug-sass');
var browserSync = require('browser-sync').create();

// compile sass to css
gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass()) // converts scss to css
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// compile jade to html
gulp.task('pug', function(){
  return gulp.src('app/pug/**/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('app/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// browser reload
gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

// gulp watch task to reload files when i save
gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/js/**/*.js', browserSync.reload);
  gulp.watch('app/*.html', browserSync.reload);
});
