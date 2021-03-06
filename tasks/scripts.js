/*
* @Author: wangxuan
* @Date:   2018-09-22 15:46:04
* @Last Modified by:   wangxuan
* @Last Modified time: 2018-09-25 22:43:36
*/
import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from 'gulp-livereload';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import {log, colors} from 'gulp-util';
import args from './util/args';

// npm install gulp gulp-if gulp-concat webpack webpack-stream vinyl-named gulp-livereload gulp-plumber gulp-rename gulp-uglify gulp-util yargs --save -dev

gulp.task('scripts', ()=>{
    return gulp.src(['app/js/index.js'])
    .pipe(plumber({
        errorHandle: function() {

        }
    }))
    .pipe(named())
    .pipe(gulpWebpack({
        module:{
        loaders:[{
          test:/\.js$/,
          loader:'babel-loader',
          exclude: /node_modules/
        }]
      }
    }), null, (err, stats)=> {
        log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
            chunks: false
        }))
    })
    .pipe(gulp.dest('server/public/js'))
    .pipe(rename({
        basename: 'cp',
        extname: '.min.js'
    }))
    .pipe(uglify({
        compress: {
            properties: false
        },
        output: {
            'quote_keys': true
        }
    }))
    .pipe(gulp.dest('server/public/js'))
    .pipe(gulpif(args.watch, livereload()))
})