/*
* Generator
* @Author: wangxuan
* @Date:   2018-09-24 22:00:15
* @Last Modified by:   wangxuan
* @Last Modified time: 2018-09-24 22:10:03
*/

{
    // generator基本定义
    let tell = function* () {
        yield 'a';
        yield 'b';
        return 'c';
    };

    let k = tell();

    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());   
}

{
    let obj = {};
    obj[Symbol.iterator] = function* () {
        yield 1;
        yield 2;
        yield 3;
    }

    for (let key of obj) {
        console.log('key', key);
    }
}