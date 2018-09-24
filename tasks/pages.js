/*
* @Author: wangxuan
* @Date:   2018-09-22 16:23:50
* @Last Modified by:   wangxuan
* @Last Modified time: 2018-09-22 16:25:39
*/
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages', ()=> {
    return gulp.src('app/**/*.ejs')
    .pipe(gulp.dest('server'))
    .pipe(gulpif(args.watch, livereload()))
})