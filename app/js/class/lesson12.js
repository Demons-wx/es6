/*
* 类的扩展
* @Author: wangxuan
* @Date:   2018-09-24 17:20:16
* @Last Modified by:   wangxuan
* @Last Modified time: 2018-09-24 17:39:14
*/

// 1. 基本语法
// 2. 类的继承
// 3. 静态方法
// 4. 静态属性
// 5. getter setter

{
    // 基本定义和生成实例
    class Parent {
        constructor(name='mukewang') {
            this.name = name;
        }
    }

    let v_parent = new Parent('v');
    console.log('构造函数和实例', v_parent);
}

{
    // 继承
    class Parent {
        constructor(name='mukewang') {
            this.name = name;
        }
    }

    class Child extends Parent {
        
    }

    console.log('继承', new Child('wx'));
}

{
    // 继承传递参数
    class Parent {
        constructor(name='mukewang') {
            this.name = name;
        }
    }

    class Child extends Parent {
        constructor(name = 'child') {
            super(name);
            // 在继承关系中，子类的构造函数需要super时，super要在第一行
            this.type = 'child';
        } 
    }

    console.log('继承参数传递', new Child());
}

{
    // getter和setter
    class Parent {
        constructor(name='mukewang') {
            this.name = name;
        }

        get longName() {
            return 'mk' + this.name;
        }

        set longName(value) {
            this.name = value;
        }
    }

    let v = new Parent();
    console.log('getter', v.longName);
    v.longName = 'hello';
    console.log('setter', v.longName);
}

{
    // 静态方法
    class Parent {
        constructor(name='mukewang') {
            this.name = name;
        }
        
        static tell() {
            console.log('tell');
        }
    }

    Parent.tell();
}

{
    // 静态属性
    class Parent {
        constructor(name='mukewang') {
            this.name = name;
        }
    }

    Parent.type = 'test';

    console.log('静态属性', Parent.type);


}















