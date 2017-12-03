const gulp = require('gulp');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('clean', function () {
    return del('dist/**/*');
});

gulp.task('copy:src', ['clean'], function () {
    return gulp.src('src/**/*')
        .pipe(gulp.dest('./dist/'))
});

gulp.task('build', ['clean', 'copy:src']);
gulp.task('default', ['build']);