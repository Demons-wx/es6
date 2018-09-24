/*
* @Author: wangxuan
* @Date:   2018-09-22 16:34:37
* @Last Modified by:   wangxuan
* @Last Modified time: 2018-09-22 19:02:44
*/
import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';

gulp.task('browser', (cb) => {
    if (!args.watch) return cb();
    gulp.watch('app/**/*.js', ['scripts']);
    gulp.watch('app/**/*.ejs', ['pages']);
    gulp.watch('app/**/*.css', ['css']);
});