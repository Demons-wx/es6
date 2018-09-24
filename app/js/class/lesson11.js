/*
* Prxoy和Reflect
* @Author: wangxuan
* @Date:   2018-09-24 10:04:18
* @Last Modified by:   wangxuan
* @Last Modified time: 2018-09-24 17:19:40
*/

{
    // 原始对象
    let obj = {
        time: '2017-03-11',
        name: 'net',
        _r: 123
    };

    // 代理对象
    let monitor = new Proxy(obj, {
        // 拦截对象属性的读取
        get(target, key) {
            return target[key].replace('2017', '2018');
        },

        // 拦截对象设置属性
        set(target, key, value) {
            if (key === 'name') {
                return target[key] = value;
            } else {
                return target[key];
            }
        },

        // 拦截 key in object操作
        has(target, key) {
            if (key === 'name') {
                return target[key];
            } else {
                return false;
            }
        },

        // 拦截删除
        deleteProperty(target, key) {
            if (key.indexOf('_') > -1) {
                delete target[key];
            } else {
                return target[key];
            }
        },

        // 拦截 Object.keys, Object.getOwnPropertySymbols, Object.getOwnPropertyNames
        ownKeys(target) {
            // 保护time属性
            return Object.keys(target).filter(item => item != 'time')
        }
    });

    console.log('get', monitor.time);

    monitor.time = '2018';
    monitor.name = 'muke';
    console.log('set', monitor);

    console.log('has', 'name' in monitor); // true
    console.log('has', 'time' in monitor); // false

    // delete monitor.time;
    // console.log('delete', monitor);

    // delete monitor._r;
    // console.log('delete', monitor);

    console.log('ownKeys', Object.keys(monitor));

}

{
    // 原始对象
    let obj = {
        time: '2017-03-11',
        name: 'net',
        _r: 123
    };

    // get
    console.log('Reflect get', Reflect.get(obj, 'time'));

    // set
    Reflect.set(obj, 'name', 'mukewang');
    console.log(obj);
    console.log('has', Reflect.has(obj, 'name')); // true
}

{
    // 数据校验
    function validator(target, validator) {
        return new Proxy(target, {
            _validator: validator,
            set(target, key, value, proxy) {
                if (target.hasOwnProperty(key)) {
                    let va = this._validator[key];
                    if (!!va(value)) {
                        return Reflect.set(target, key, value, proxy);
                    } else {
                        throw Error(`不能设置${key}到${value}`)
                    }
                } else {
                    throw Error(`${key} 不存在`)
                }
            }
        })
    }

    const personValidators = {
        name(val) {
            return typeof val === 'string'
        },
        age(val) {
            return typeof val === 'number' && val > 18
        },
        mobile(val) {
            return val.length === 11
        }
    }

    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.mobile = '1111';
            return validator(this, personValidators);
        }
    }

    const person = new Person('lilei', 30);
    console.log(person);

    person.name = 'han meimei';
    console.log(person);

}





















