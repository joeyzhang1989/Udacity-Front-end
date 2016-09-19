var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');

gulp.task('scripts', function() {
	gulp.src('js/**/*.js')
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('js/'));

});
