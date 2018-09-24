/*
* 正则扩展
* @Author: wangxuan
* @Date:   2018-09-23 12:07:28
* @Last Modified by:   wangxuan
* @Last Modified time: 2018-09-23 12:27:55
*/

{
    // es5写法
    // i 表示忽略大小写
    let regex = new RegExp('xyz', 'i');
    let regex2 = new RegExp(/xyz/i);

    console.log(regex.test('xyz123'), regex2.test('xyz123')); // true true

    // es6中，用这种方式定义正则，则后面的修饰符会覆盖前面的
    let regex3 = new RegExp(/xyz/ig, 'i');
    // flags用来获取修饰符
    console.log(regex3.flags);
}

{
    // y修饰符
    // g和y都是全局匹配，g不强调第一个字符必须得匹配
    let s = 'bbb_bb_b';

    let a1 = /b+/g;
    let a2 = /b+/y;

    console.log('one', a1.exec(s), a2.exec(s)); // bbb bbb
    // g修饰符会忽略下划线 匹配 bb , y修饰符不会忽略下划线
    console.log('two', a1.exec(s), a2.exec(s)); // bb null

    // 判断正则是否开启y
    console.log(a1.sticky, a2.sticky); // false true
}

{
    // u修饰符
    console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A')); // true
    // 加u会将 \uD83D\uDC2A 两个字符，看成是1个字符
    console.log('u-2', /^\uD83D/u.test('\uD83D\uDC2A')); // false

    console.log(/\u{61}/.test('a')); // false
    console.log(/\u{61}/u.test('a')); // true

    console.log(`\u{20BB7}`);


    // 如果字符串中有的字符是大于两个字节的，那需要加上u才能
    // 正确识别
    let s= '𠮷';
    console.log('u', /^.$/.test(s)); // false
    console.log('u', /^.$/u.test(s)); // true

    console.log('test', /𠮷{2}/.test('𠮷𠮷')); // false
    console.log('test-2', /𠮷{2}/u.test('𠮷𠮷')); // true
}



