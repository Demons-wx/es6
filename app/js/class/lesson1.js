/*
* @Author: wangxuan
* @Date:   2018-09-22 18:03:34
* @Last Modified by:   wangxuan
* @Last Modified time: 2018-09-23 11:19:45
*/

// 如果一段代码是用大括号包起来的，那么这个大括号里就是块作用域
function test(){
    // 在块作用域里声明的let变量，在块作用域外是不存在的
    // for (let i = 1; i < 3; i++) {
    //     console.log(i);
    // }
    // console.log(i);

    // Module build failed: Duplicate declaration "a"
    // 不能重复声明变量
    // let a = 1;
    // let a = 2;
}

function last() {
    // const声明的时候必须赋值
    const PI = 3.1415926;
    // Module build failed: SyntaxError: "PI" is read-only
    // PI = 8;
    console.log(PI);

    const k = {
        a: 1
    }
    k.b = 3;
    console.log(k);
}

last();