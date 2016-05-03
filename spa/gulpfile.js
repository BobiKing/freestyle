var gulp = require('gulp');
var concat = require('gulp-concat');
var gulputil = require('gulp-util');
var uglify = require('gulp-uglify');
var del = require('del');
var minifyCSS = require('gulp-minify-css');


gulp.task('js', function () {
  return gulp.src('source/*.js')
    .pipe(gulp.dest('public/'))
});

gulp.task('scripts', function() {
  return gulp.src([ 'source/module.config.js' ,'source/**/*.js'])
    .pipe(concat('js/app.js'))
    .pipe(gulp.dest('public/'));
});

gulp.task('libs', function () {
  return gulp.src([
    'bower_components/angular/angular.min.js',
    'bower_components/angular-route/angular-route.min.js',
    'bower_components/jquery/dist/jquery.min.js'
  ])
    .pipe(concat('libs.js'))
    .pipe(gulp.dest('public/js/'));
});

gulp.task('html', function(){
  gulp.src('source/**/*.html')
    .pipe(gulp.dest('public'))
});

gulp.task('clean', function () {
  return del([
    'public/**/*',
  ]);
});

//CSS
gulp.task('default_css', function () {
  //return gulp.src('source/css/*.css')
   gulp.src('source/css/*.css')
    .pipe(concat('site.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('public/css'))
})

gulp.task('watch_css', function () {
  gulp.run('default_css')
  gulp.watch('source/css/*.css', function(){
    gulp.run('default_css')
  })
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch('source/**/*.html', ['html']);
  gulp.watch('source/*.js', ['scripts']);
});


// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch']);

gulp.task('update_all_manually', ['js', 'html', 'scripts', 'libs']);

//Example of a Watch
//gulp.task('watch', function() {
//  // Watch .js files
//  gulp.watch('src/js/*.js', ['scripts']);
//  // Watch .scss files
//  gulp.watch('src/scss/*.scss', ['sass']);
//  // Watch image files
//  gulp.watch('src/images/**/*', ['images']);
//});