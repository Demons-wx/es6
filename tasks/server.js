/*
* @Author: wangxuan
* @Date:   2018-09-22 16:27:57
* @Last Modified by:   wangxuan
* @Last Modified time: 2018-09-22 19:08:06
*/
import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('server', (cb) => {
    if (!args.watch) return cb();

    var server = liveserver.new(['--harmony', 'server/bin/www']);
    server.start();

    gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs'], function(file) {
        server.notify.apply(server, [file]);
    })

    gulp.watch(['server/routes/**/*.js', 'server/app.js'], function() {
        server.start.bind(server)()
    });
})