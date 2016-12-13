var gulp = require('gulp');
var bs = require('browser-sync').create(); // create a browser sync instance.

gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});


bs.init({
    server: {
        baseDir: "./"
    },
    proxy: "http://192.168.0.13:8080" // makes a proxy for localhost:8080
});
