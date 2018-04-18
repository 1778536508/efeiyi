
var gulp = require('gulp');                  //gulp
var browserSync = require('browser-sync');   //浏览器自动刷新


//实时监听文件变化   gulp-watch是gulp自带的插件不需要去从新下载
gulp.task('watch',['browserSync'], function() {
    gulp.watch('css/*.scss', ['sass']) // Gets all files ending with .scss in app/scss and children dirs
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('js/*.js', browserSync.reload);
    gulp.watch('img/*', browserSync.reload);
});

//启动服务器 使浏览器自动刷新
gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: 'demo',   //默认根目录
            index: 'index.html'
        },
    })
});
