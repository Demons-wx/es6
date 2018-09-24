/*
* @Author: wangxuan
* @Date:   2018-09-22 16:38:51
* @Last Modified by:   wangxuan
* @Last Modified time: 2018-09-22 16:41:59
*/
// npm install gulp-live-server del gulp-util --save -dev

import gulp from 'gulp';
import del from 'del';
import args from './util/args';

gulp.task('clean', () => {
    return del(['server/public', 'server/views'])
})



