var gulp = require("gulp"),
	browserify = require('browserify'),
	babelify = require('babelify'),
	source = require('vinyl-source-stream'),
	browserSync = require('browser-sync').create();


gulp.task('default',function(){
	return browserify('./js/App.js')
	 	   .transform(babelify,{
				presets: ['es2015', 'react']
			})
	 	   .bundle()
	 	   .pipe(source('bundle.js'))
	 	   .pipe(gulp.dest('js'));
});

gulp.task("server",function() {
	browserSync.init({
		server:{
			baseDir:'./'
		}
	});
});