/*
* @Author: wangxuan
* @Date:   2018-09-22 15:35:33
* @Last Modified by:   wangxuan
* @Last Modified time: 2018-09-22 19:08:55
*/
import yargs from 'yargs';

const args = yargs

    .option('production', {
        boolean: true,
        default: false,
        describe: 'min all scripts'
    })

    .option('watch', {
        boolean: true,
        default: false,
        describe: 'watch all files'
    })

    .option('verbose', {
        boolean: true,
        default: false,
        describe: 'log'
    })

    .option('sourcemaps', {
        describe: 'force the creation of sourcemaps'
    })

    .option('port', {
        string: true,
        default: 8080,
        describe: 'server port'
    })

    .argv

export default args