
const { src, dest, watch, parallel} = require('gulp');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
// const cssmin = require('gulp-cssmin');
const fileinclude = require('gulp-file-include');
const prettier = require('gulp-prettier');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const ftp = require('vinyl-ftp');
const fs = require('fs');
const ftpConfig = JSON.parse(fs.readFileSync('./ftp-settings.json'));
const connect = ftp.create(ftpConfig);


function deploy() {
  return src(['dist/**/*.*'])
    .pipe(connect.newer('www/deployhost.ga/projects/gigs/'))
    .pipe(connect.dest('www/deployhost.ga/projects/gigs/'));
}

function html() {
  return src(['app/**/*.html', '!app/components/**/*.html'])
    .pipe(fileinclude())
    .pipe(prettier({
      singleQuote: true,
      printWidth: 3000
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream());
}

function tailwindCSS() {
  return src(['app/css/style.css'])
    .pipe(postcss())
    .pipe(concat('style.css'))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream());
}

// function cssLibs() {
//   return src([
//     'node_modules/swiper/swiper-bundle.min.css',
//     ])
//     .pipe(concat('libs.min.css'))
//     .pipe(cssmin())
//     .pipe(dest('dist/css'))
//     .pipe(browserSync.stream());
// }

function js() {
  return src(['app/js/main.js'])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream());
}

// function jsLibs() {
//   return src([
//       'node_modules/swiper/swiper-bundle.min.js',
//     ])
//     .pipe(concat('libs.min.js'))
//     .pipe(uglify())
//     .pipe(dest('dist/js'))
//     .pipe(browserSync.stream());
// }

function watching() {
    watch(['app/css/**/*.css'], tailwindCSS);
    watch(['app/js/**/*.js'], js);
    watch(['app/**/*.html']).on('change', tailwindCSS, html, browserSync.reload );
    watch(['app/**/*.html'], tailwindCSS && html);
}

function browsersync(){
    browserSync.init({
        server: { baseDir: "dist/" },
        notify: true,
        online: true
    });
}


exports.html = html;
exports.tailwindCSS = tailwindCSS;
// exports.cssLibs = cssLibs;
exports.watching = watching;
exports.browsersync = browsersync;
exports.js = js;
// exports.jsLibs = jsLibs;
exports.deploy = deploy;

exports.default = parallel(html, tailwindCSS, js, browsersync, watching);