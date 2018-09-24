/*
* @Author: wangxuan
* @Date:   2018-09-22 16:25:54
* @Last Modified by:   wangxuan
* @Last Modified time: 2018-09-22 16:26:59
*/
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('css', ()=> {
    return gulp.src('app/**/*.css')
    .pipe(gulp.dest('server/public'))
})