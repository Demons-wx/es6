/*
* @Author: wangxuan
* @Date:   2018-09-22 16:41:49
* @Last Modified by:   wangxuan
* @Last Modified time: 2018-09-22 16:44:59
*/
import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

gulp.task('build', gulpSequence('clean', 'css', 'pages', 'scripts', ['browser', 'server']));
