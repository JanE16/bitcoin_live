// gulpfile.js
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

function swallowError (error) {
    console.log(error);
    this.emit('end')
}

gulp.task('sass', function() {
    return gulp.src('scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .on('error', swallowError)
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
    gulp.watch('scss/style.scss', ['sass'])
})

gulp.task('default', ['sass', 'watch']);