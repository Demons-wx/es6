/*
* 对象扩展 指Object
* @Author: wangxuan
* @Date:   2018-09-23 23:10:03
* @Last Modified by:   wangxuan
* @Last Modified time: 2018-09-23 23:45:39
*/

// 1. 简洁表示法
// 2. 属性表达式
// 3. 扩展运算符
// 4. Object新增方法

{
    // 简洁表示法
    let o = 1;
    let k = 2;

    let es5 = {
        o: o,
        k: k
    };

    let es6 = {
        o,
        k
    };

    console.log(es5, es6);

    let es5_method = {
        hello: function() {
            console.log('hello');
        }
    };

    let es6_method = {
        hello() {
            console.log('hello');
        }
    };

    console.log(es6_method.hello(), es5_method.hello());
}

{
    // 属性表达式
    let a = 'b';
    let es5_obj = {
        a: 'c',
        b: 'c'
    };

    let es6_obj = {
        [a]: 'c' // [a] 就是 b
    };

    console.log(es6_obj, es5_obj);
}

{
    // 新增api
    // 判断两个值是否相等 功能与 === 一样
    console.log('字符串', Object.is('abc', 'abc'), 'abc'==='abc'); // true true
    console.log('数组', Object.is([], []), []===[]); // false false

    // 拷贝，两个对象会合并成一个新的对象 浅拷贝
    console.log('拷贝', Object.assign({a: 'a'}, {b: 'b'}));

    // 对象遍历
    let test = {k: 123, o: 456};
    for (let [key, value] of Object.entries(test)) {
        console.log(key, value);
    }
}

{
    // 扩展运算符
    // let {a, b, ...c} = {a: 'test', b: 'kill', c: 'ddd', d: 'ccc'};
    // c = {
    //     c: 'ddd',
    //     d: 'ccc'
    // }
}










