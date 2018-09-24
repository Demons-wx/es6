/*
* 字符串扩展
* @Author: wangxuan
* @Date:   2018-09-23 12:32:41
* @Last Modified by:   wangxuan
* @Last Modified time: 2018-09-23 17:35:34
*/
// npm install babel-polyfill --save-dev

{
    console.log('a', `\u0061`); // a a
    console.log('s', `\u20BB7`); // s ₻7

    console.log('s', `\u{20BB7}`); // s 𠮷


}

{
    let s = '𠮷';
    console.log('length', s.length); // 2
    // 取字符
    console.log('0', s.charAt(0)); // �
    console.log('1', s.charAt(1)); // �
    // 取字符的unicode编码
    console.log('at0', s.charCodeAt(0)); // 55362
    console.log('at1', s.charCodeAt(1)); // 57271

    let s1 = '𠮷a';
    console.log('length', s1.length); // 3
    console.log('code0', s1.codePointAt(0)); // 134071
    console.log('code0', s1.codePointAt(0).toString(16)); // 20bb7
    console.log('code0', s1.codePointAt(1)); // 57271
    console.log('code0', s1.codePointAt(2)); // 97
}

{
    // es5
    console.log(String.fromCharCode("0x20bb7")); // ஷ
    // es6
    console.log(String.fromCodePoint("0x20bb7")); // 𠮷

}

{
    let str = '\u{20bb7}abc';
    for(let i = 0; i < str.length; i++) {
        console.log('es5', str[i]);
    }

    for(let code of str) {
        console.log('es6', code);
    }
}

{
    let str = "string";
    console.log('includes', str.includes('r'));
    console.log('start', str.startsWith('str'));
    console.log('end', str.endsWith('ng'));
}

{
    let str = "abc";
    console.log(str.repeat(2));
}

{
    // 模板字符串
    let name = "list";
    let info = "hello world";
    let m = `i am ${name}, ${info}`;

    console.log(m);
}

{
    // es7 补白
    console.log('1'.padStart(2, '0'));  // 01
    console.log('1'.padEnd(2, '0')); // 10
}

{
    // 标签模板
    let user = {
        name: 'list',
        info: 'hello world'
    };

    console.log(abc`i am ${user.name}, ${user.info}`);
    function abc(s, v1, v2) {
        console.log(s, v1, v2);
        return s+v1+v2;
    } 
}

{
    console.log(String.raw`Hi\n${1+2}`);
    console.log(`Hi\n${1+2}`);
}











