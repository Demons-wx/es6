/*
*   解构赋值
* @Author: wangxuan
* @Date:   2018-09-23 11:22:02
* @Last Modified by:   wangxuan
* @Last Modified time: 2018-09-23 11:45:54
*/

// 1. 数组解构赋值
// 2. 对象解构赋值
// 3. 字符串解构赋值
// 4. 布尔值解构赋值
// 5. 函数参数解构赋值
// 6. 数值解构赋值


{
    let a, b, rest;
    [a, b] = [1, 2];
    console.log(a, b);

}

{
    // 数组解构赋值
    let a, b, rest;
    [a, b, ... rest] = [1, 2, 3, 4, 5, 6];
    console.log(a, b, rest); // 1, 2, [3, 4, 5, 6]
}

{
    // 对象解构赋值
    let a, b;
    ({a, b} = {a: 1, b: 2})
    console.log(a, b);
}

{   
    // 默认值的设置
    let a, b, c, rest;
    [a, b, c=3] = [1, 2];
    console.log(a, b, c);

}

// 如果解构对象没有在结构上成功配对，则该对象为undefined

{
    // 变量交换
    let a = 1;
    let b = 2;
    [a, b] = [b, a];
    console.log(a, b); // 2 1
}

{
    function f() {
        return [1, 2]
    }
    let a, b;
    [a, b] = f();
    console.log(a, b); // 1 2
}

{
    // 选择性的接收变量
    function f() {
        return [1, 2, 3, 4, 5];
    }
    let a, b, c;
    [a,,,b] = f();
    console.log(a, b); // 1 4
}

{
    function f() {
        return [1, 2, 3, 4, 5];
    }
    let a, b, c;
    [a,...b] = f();
    console.log(a, b); // 1 [2, 3, 4, 5]
}

{
    let o = {p: 42, q: true};
    let {p, q} = o;
    console.log(p, q);
}

{   
    // 对象解构赋值 默认值
    let {a=10, b=5} = {a: 3};
    console.log(a, b); // 3 5
}

{
    let metaData = {
        title: 'abc',
        test: [{
            title: 'test',
            desc: 'description'
        }]
    }

    let {title: esTitle, test: [{title: cnTitle}]} = metaData;
    console.log(esTitle, cnTitle); // abc test
}






