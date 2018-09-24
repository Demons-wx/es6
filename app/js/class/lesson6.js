/*
*   数组扩展
* @Author: wangxuan
* @Date:   2018-09-23 18:00:00
* @Last Modified by:   wangxuan
* @Last Modified time: 2018-09-23 22:47:13
*/
{
    let arr = Array.of(3, 4, 7, 9, 11);
    console.log('arr=', arr);

    let empty = Array.of();
    console.log('empty=', empty);
}

{
    // 将伪数组真正转换为数组 Array.from
    let p = document.querySelectorAll('p');
    let pArr = Array.from(p);
    pArr.forEach(function(item) {
        console.log(item.textContent);
    });

    // map 映射
    console.log(Array.from([1, 3, 5], function(item) {
        return item * 2
    })); // [2, 6, 10]
}

{
    // 填充数组
    console.log('fill-7', [1, 'a', undefined].fill(7));
    // fill(7, 1, 3) 替换为7，从起始位置1开始，替换3个
    console.log('fill-pos', ['a', 'b', 'c'].fill(7, 1, 3));
}

{
    // 0, 1, 2
    for(let index of ['1', 'c', 'ks'].keys()) {
        console.log('keys', index);
    }
    // 1, c, ks
    for(let value of ['1', 'c', 'ks'].values()) {
        console.log('values', value);
    }

    for(let [index, value] of ['1', 'c', 'ks'].entries()) {
        console.log('values', index, value);
    }
}

{
    // 当前数组内部，把指定位置的元素复制到其他位置
    // 0 要替换的位置 3 从3开始读取数据到4截止
    console.log([1,2,3,4,5].copyWithin(0, 3, 4));
}

{
    // 查找 find findIndex
    console.log([1, 2, 3, 4, 5, 6].find(function(item) {
        return item > 3;
    })); // 4 只找到第一个符合条件的元素
    
    console.log([1, 2, 3, 4, 5, 6].findIndex(function(item) {
        return item > 3;
    })); // 3 返回index
}

{
    console.log('number', [1, 2, NaN].includes(1)); // true
    console.log('number', [1, 2, NaN].includes(NaN)); // true
}








