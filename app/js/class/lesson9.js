/*
* Symbol
* @Author: wangxuan
* @Date:   2018-09-23 23:46:14
* @Last Modified by:   wangxuan
* @Last Modified time: 2018-09-24 00:00:01
*/

// 1. Symbol的概念
// 提供一个独一无二的值

{
    // 声明
    let a1 = Symbol();
    let a2 = Symbol();

    console.log(a1 === a2); // false

    let a3 = Symbol.for('a3');
    let a4 = Symbol.for('a3');

    console.log(a3 === a4); // true
}

{ 
    let a1 = Symbol.for('abc');
    let obj = {
        [a1]: '123',
        'abc': 345, 
        'c': 456
    }

    console.log('obj', obj);

    // 通过for in he let of 拿不到Symbol属性
    for (let [key, value] of Object.entries(obj)) {
        console.log('let of', key, value); // let of abc 345 let of c 456
    }

    // 只拿到了Symbol属性
    Object.getOwnPropertySymbols(obj).forEach(function(item) {
        console.log(obj[item]); // 123
    })

    // 可以拿到所有属性
    Reflect.ownKeys(obj).forEach(function(item) {
        console.log('ownKeys', item, obj[item]); 
    })
}