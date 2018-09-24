/*
* 参数扩展
* @Author: wangxuan
* @Date:   2018-09-23 22:50:07
* @Last Modified by:   wangxuan
* @Last Modified time: 2018-09-23 23:09:38
*/

{
    // 参数默认值, 默认值后面不允许出现没有默认值的参数
    function test(x, y = 'world') {
        console.log('默认值', x, y);
    }

    test('hello'); // 默认值 hello world
    test('hello', 'kill');
}

{
    let x = 'test';
    function test2(x, y=x) {
        console.log('作用域', x, y);
    }

    test2('kill'); // kill kill
    test2(); // undefined undefined
}

{
    // res参数 res参数之后不能再有别的参数
    function test3(...arg) {
        for(let v of arg) {
            console.log('rest', v);
        }
    }

    test3('a', 'b', 'c');
}

{
    // 扩展运算符 把数组拆成离散的值
    console.log(...[1, 2, 4]); // 1 2 4
    console.log('a',...[1, 2, 4]); // a, 1 2 4
}

{
    // 箭头函数 函数名 = 参数 => 返回值
    let arrow = v => v * 2;
    let arrow2 = () => 5;
    console.log(arrow(3)); // 6
    console.log(arrow2()); // 5
}

{
    // 伪调用 函数的最后一句是不是函数 (提升性能)
    function tail(x) {
        console.log('tail', x);
    }

    function fx(x) {
        return tail(x);
    }

    fx(123); // 123
}







