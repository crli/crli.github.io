/*!
 * gulp
 * $ cnpm install gulp gulp-sass gulp-autoprefixer gulp-minify-css gulp-sourcemaps jshint gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename browser-sync gulp-cache gulp-htmlmin gulp-fontmin --save-dev
 */
// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    htmlmin = require('gulp-htmlmin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    fontmin = require('gulp-fontmin'),
    browserSync = require("browser-sync");

// Styles
gulp.task('css', function() {
    return gulp.src('app/css/**/*.scss')
    // .pipe(sourcemaps.init())  
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions','safari 5', 'ie 6','ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],cascade: false}))
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('app/css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('app/css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});
// Scripts
gulp.task('scripts', function() {
  return gulp.src('app/js/**/*.js')
    // .pipe(jshint())
    // .pipe(jshint.reporter('default'))
    // .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    // .pipe(gulp.dest('app/js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});
// Images
gulp.task('images', function() {
  return gulp.src('app/images/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images'))
    .pipe(notify({ message: 'Images task complete' }));
});
//html
gulp.task('html', function() {
  return gulp.src('app/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});
//fonts
gulp.task('fonts', function () {
  return gulp.src('app/fonts/*.+(eot|svg|ttf|woff)')
    .pipe(fontmin({text: '天地玄黄 宇宙洪荒',}))
    .pipe(gulp.dest('dist/fonts'));
});
//clear
gulp.task('clean', function() {  
  return gulp.src(['dist/css', 'dist/js', 'dist/images'], {read: false})
    .pipe(clean());
});
// Default task
gulp.task('default', function() {
    gulp.start('css', 'scripts', 'images');
});
// Watch
gulp.task('watch', function() {
  browserSync.init({server: {baseDir: "./"}});
  // Watch .scss files
  gulp.watch('app/css/**/*.scss', ['css']);
  // Watch .js files
  gulp.watch('app/js/**/*.js', ['scripts']);
  // Watch image files
  gulp.watch('app/images/*', ['images']);
  // Watch .html files
  gulp.watch('app/**/*.html', ['html']);
  // Watch any files in dist/, reload on change
  gulp.watch(['dist/**']).on('change',  browserSync.reload);
});
