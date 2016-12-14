var gulp = require('gulp');


var minify = require('gulp-minify');
 
gulp.task('compress', function() {
  gulp.src('public/**/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('public/minjs'))
});