/*
* set-map数据结构
* @Author: wangxuan
* @Date:   2018-09-24 00:00:36
* @Last Modified by:   wangxuan
* @Last Modified time: 2018-09-24 11:11:05
*/
{
    let list = new Set();
    list.add(5);
    list.add(7);

    console.log('size', list.size);
}

{
    let arr = [1, 2, 3, 4, 5];
    let list = new Set(arr);

    console.log('size', list.size);
}

{
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1);

    console.log('list', list); // 1 2

    // 去重的时候，要注意元素的数据类型
    let arr = [1, 2, 3, 1, '2'];
    let list2 = new Set(arr);
    console.log('unique', list2);
}

{
    // 方法
    let arr = ['add', 'delete', 'clear', 'has'];
    let list = new Set(arr);
    
    console.log('has', list.has('add'));
    console.log('delete', list.delete('add'), list);
    list.clear();
    console.log('list', list);
}

{
    // 遍历
    let arr = ['add', 'delete', 'clear', 'has'];
    let list = new Set(arr);
    
    // key和value一样都是元素值
    for (let key of list.keys()) {
        console.log('keys', key);
    }

    for (let value of list.values()) {
        console.log('values', value);
    }

    for (let [key, value] of list.entries()) {
        console.log('entries', key, value);
    }

    list.forEach(function(item) {
        console.log(item);
    })
}

{
    // WeakSet
    // 1. WeakSet和Set支持的数据类型不一样 WeakSet的元素只能是对象
    // 2. WeakSet的对象都是弱引用
    // 没有clear方法，没有size属性，不支持遍历

    let weakList = new WeakSet();
    let arg = {};
    weakList.add(arg);
    // weakList.add(1); // Invalid value used in weak set
    console.log('weakList', weakList);
}

{
    // map
    let map = new Map();
    let arr = ['123'];

    map.set(arr, 456);
    console.log('map', map, map.get(arr));
}

{
    let map = new Map([['a', 123], ['b', 456]]);
    console.log('map args', map); // {"a" => 123, "b" => 456}

    // 常用的属性值和方法
    console.log('size', map.size);
    console.log('delete', map.delete('a'), map);
    console.log('clear', map.clear(), map);
}

{
    let weakMap = new WeakMap();
    
    let o = {};
    weakMap.set(o, 123);
    console.log(weakMap.get(o));
}

{
    // 数据结构横向对比，增删改查
    let map = new Map();
    let array = [];

    // 增
    map.set('t', 1);
    array.push({t: 1});
    console.log('map-array', map, array);

    // 查
    let map_exist = map.has('t'); // 返回布尔值
    let array_exist = array.find(item => item.t); // 返回值
    console.log('map-array', map_exist, array_exist);

    // 改
    map.set('t', 2);
    array.forEach(item => item.t ? item.t = 2 : '');
    console.log('map-array-modify', map, array);

    // 删除
    map.delete('t');
    let index = array.findIndex(item => item.t);
    array.splice(index, 1);
    console.log('map-array-empty', map, array);  
}

{
    // set和array的对比
    let set = new Set();
    let array = [];

    // 增
    set.add({t: 1});
    array.push({t: 1});

    console.info('set-array', set, array);

    // 查
    let set_exist = set.has({t: 1});
    let array_exist = array.find(item => item.t); 
    console.log('set-array', set_exist, array_exist);

    // 改
    set.forEach(item => item.t ? item.t = 2 : '');
    array.forEach(item => item.t ? item.t = 2 : '');
    console.log('set-array-modify', set, array);
    
    // 删
    set.forEach(item => item.t ? set.delete(item) : '');
    let index = array.findIndex(item => item.t);
    array.splice(index, 1);
    console.log('set-array-delete', set, array);  
}

{
    // map set object对比
    let item = {t: 1};

    let map = new Map();
    let set = new Set();
    let obj = {};

    // 增
    map.set('t', 1);
    set.add(item);
    obj['t'] = 1;

    console.log('map-set-obj', map, set, obj);

    // 查
    console.log({
        map_exist: map.has('t'),
        set_exist: set.has(item),
        obj_exist: 't' in obj
    })

    // 改
    map.set('t', 2);
    item.t = 2;
    obj['t'] = 2;
    console.log('map-set-obj', map, set, obj);

    // 删除
    map.delete('t');
    set.delete(item);
    delete obj['t'];
    console.log('map-set-obj', map, set, obj);
}

// 建议：能使用map就不使用数组，放弃使用obj做存储












