var gulp = require('gulp');

gulp.task('default', ['Hello']
);

gulp.task('Hello', function(){
	console.log("Hello World!");
});