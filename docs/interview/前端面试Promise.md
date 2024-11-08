---
sidebar_position: 3
---

# 前端面试Promise

- `setTimeout` 会在一定的延迟后执行一次指定的函数。

- `setInterval` 会以固定的时间间隔重复执行指定的函数。

  

## 严肃模式

严肃模式（Strict Mode）是 ECMAScript 5 引入的一种JavaScript模式，旨在通过消除一些不安全的操作，提高代码的安全性和性能。启用严肃模式后，JavaScript引擎将以更严格的方式执行代码，从而减少错误并提高可维护性。

主要特性：

1. **防止意外的全局变量**： 在非严格模式下，如果你未声明一个变量，JavaScript会将其默认为全局变量。而在严格模式下，未声明的变量将抛出错误。

   ```javascript
   "use strict";
   x = 3.14; // 报错：未声明的变量
   ```

2. **禁止删除变量**： 在严格模式下，尝试删除一个变量或函数会抛出错误。

   ```javascript
   "use strict";
   var x = 3;
   delete x; // 报错
   ```

3. **禁止使用重复的参数名**： 在严格模式下，函数参数不能有重复的名称。

   ```javascript
   "use strict";
   function sum(a, a, c) { // 报错：参数名重复
       return a + a + c; 
   }
   ```

4. **消除 `this` 的绑定**： 在严格模式下，如果一个函数被调用而没有绑定到任何对象（例如，作为全局函数调用），`this` 将是 `undefined`，而不是全局对象。

   ```javascript
   "use strict";
   function show() {
       console.log(this); // undefined
   }
   show();
   ```

5. **更严格的变量声明**： 严肃模式要求所有变量都必须使用 `let`、`const` 或 `var` 进行声明，否则会抛出错误。

如何启用严肃模式：

在 JavaScript 文件的开头或函数内部添加 `"use strict";` 语句即可启用严肃模式。

```javascript
'use strict'

function func(){
'use strict'
}
```





## Promise

Promise 是一种用于处理异步操作的 JavaScript 对象，允许我们以更清晰的方式编写异步代码。它代表一个可能在未来某个时刻完成（或失败）的操作的结果。

主要特性：

1. **状态**： Promise 有三种状态：

   - **Pending（待定）**：初始状态，既不是成功也不是失败。
   - **Fulfilled（已实现）**：操作成功完成。
   - **Rejected（已拒绝）**：操作失败。

2. **链式调用**： Promise 允许我们使用 `.then()` 和 `.catch()` 方法进行链式调用，以处理成功或失败的结果。

   ```javascript
   javascript复制代码const myPromise = new Promise((resolve, reject) => {
       // 异步操作
       const success = true; // 假设操作成功
       if (success) {
           resolve("成功！"); // 进入 fulfilled 状态
       } else {
           reject("失败！"); // 进入 rejected 状态
       }
   });
   
   myPromise
       .then(result => {
           console.log(result); // 处理成功结果
       })
       .catch(error => {
           console.error(error); // 处理失败结果
       });
   ```

3. **组合多个 Promise**： Promise.all 和 Promise.race 方法允许我们处理多个 Promise 的组合。

   ```javascript
   javascript复制代码const promise1 = Promise.resolve(3);
   const promise2 = 42;
   const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 100, "foo"));
   
   Promise.all([promise1, promise2, promise3])
       .then(values => {
           console.log(values); // [3, 42, "foo"]
       });
   ```

4. **避免回调地狱**： Promise 通过链式调用使得代码更加简洁，避免了传统回调函数的嵌套，提升了可读性。



**代码例子：**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=
    , initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <div>
        <button id="btn">点击抽奖</button>
    </div>

    <script>
        function rand(m, n) {
            return Math.ceil(Math.random() * (n - m + 1)) + m - 1;
        }

        const btn = document.querySelector('#btn');

        btn.addEventListener('click', function () {

            const p = new Promise((resolve, reject) => {
                setTimeout(() => {
                    let n = rand(1, 100);

                    if (n <= 30) {
                        resolve(n); // 成功
                    } else {
                        reject(n); // 失败
                    }
                }, 1000);
            })

            p.then((value) => {
                alert('中奖 ' + value);
            }, (e) => {
                alert('再接再厉 ' + e)
            })

        })
    </script>

</body>
</html>
```



## 读取文件内容

```javascript
const fs = require('fs');

fs.readFile('./resource/content.txt', (err, data) => {
    if (err) throw err;

    console.log(data.toString());
})
```



## 读取文件内容 Promise

```javascript
const fs = require('fs');

const p = new Promise((resolve, reject) => {
    fs.readFile('./resource/content.txt', (err, data) => {
        if (err) reject(err);

        resolve(data);
    })
})

p.then((value) => {
    console.log(value.toString());
}, e => {
    console.log(e)
})
```



## 方法 Promise

```javascript
function mineReadFile(path){
    return new Promise((resolve, reject) => {
        require('fs').readFile(path, (err, data) => {
            if(err) reject(err);
          
            resolve(data);
        })
    })
}

mineReadFile('./resource/content.txt').then( value => {
    console.log(value.toString());
}, e => {
    console.log(e);
})
```



















































