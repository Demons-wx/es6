/*
* Promise 异步编程
* @Author: wangxuan
* @Date:   2018-09-24 17:39:31
* @Last Modified by:   wangxuan
* @Last Modified time: 2018-09-24 21:46:55
*/

{
    // es5 回调 ajax
    let ajax = function(callback) {
        console.log('执行');
        setTimeout(function() {
            callback && callback.call();
        }, 1000);
    };

    ajax(function() {
        console.log('timeout1');
    })
}

{
    let ajax = function() {
        console.log('执行2');
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve()
            }, 1000);
        })
    };
    
    // then后面可以有两个方法，第一个方法处理resolve，第二个方法处理reject
    ajax().then(function() {
        console.log('promise', 'timeout2');
    })
}

{
    // Promise 多步调用
    let ajax = function() {
        console.log('执行3');
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve()
            }, 1000);
        })
    };

    ajax()
        .then(function() {
            return new Promise(function(resolve, reject) {
                setTimeout(function() {
                    resolve()
                }, 2000);
            });
        })
        .then(function() {
            console.log('timeout3');
        })
}

{
    // 异常处理
    let ajax = function(num) {
        console.log('执行4');
        return new Promise(function(resolve, reject) {
            if (num > 5) {
                resolve()
            } else {
                throw new Error('出错了');
            }
        })
    }

    ajax(6).then(function() {
        console.log('log', 6);
    }).catch(function(err) {
        console.log('catch', err);
    });

    ajax(3).then(function() {
        console.log('log', 3);
    }).catch(function(err) {
        console.log('catch', err);
    });
}



{
    // 所有图片加载完再加载页面
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function() {
                resolve(img);
            }
            img.onerror = function() {
                reject(err);
            }
        })
    }

    function showImgs(imgs) {
        imgs.forEach(function(img) {
            document.body.appendChild(img);
        })
    }

    Promise.all([
        loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
        loadImg('http://i4.buimg.com/567571/2b07ee25b08930ba.png'),
        loadImg('http://i4.buimg.com/567571/5eb8190d6b2a1c9c.png')
    ]).then(showImgs)
}

{
    // 只加载一张图片再加载页面
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function() {
                resolve(img);
            }
            img.onerror = function() {
                reject(err);
            }
        })
    }

    function showImgs(img) {
        let p = document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p);
    }

    Promise.race([
        loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
        loadImg('http://i4.buimg.com/567571/2b07ee25b08930ba.png'),
        loadImg('http://i4.buimg.com/567571/5eb8190d6b2a1c9c.png')
    ]).then(showImgs);
}















