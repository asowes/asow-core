### 什么是原型/原型链？

`__proto__`和`prototype`关系：`__proto__`和`constructor`是**对象**独有的，`prototype`属性是**函数**独有的。因为在js中函数也是对象的一种，所以函数也拥有 `__proto__` 和 `constructor` 属性   

#### 原型  
在 js 中我们是使用构造函数来新建一个对象的，每一个构造函数的内部都有一个 `prototype` 属性值，这个属性值是一个对象，这个对象包含了可以由该构造函数的所有实例共享的属性和方法。当我们使用构造函数新建一个对象后，在这个对象的内部将包含一个指针，这个指针指向构造函数的 `prototype` 属性对应的值，在 ES5 中这个指针被称为对象的原型。一般来说我们是不应该能够获取到这个值的，但是现在浏览器中都实现了 `__proto__` 属性来让我们访问这个属性，但是我们最好不要使用这个属性，因为它不是规范中规定的。ES5 中新增了一个 `Object.getPrototypeOf()` 方法，我们可以通过这个方法来获取对象的原型。 

#### 原型链         
当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又会有自己的原型，于是就这样一直找下去

原型链是由原型对象组成，每个对象都有 `__proto__` 属性，指向了创建该对象的构造函数的原型，`__proto__` 将对象连接起来组成了原型链。是一个用来实现继承和共享属性的有限的对象链

#### 举例
`实例.__proto__ === 原型`  
`原型.constructor === 构造函数`  
`构造函数.prototype === 原型` 

`const date = new Date();`  
`date.__proto__ === Object.getPrototypeOf(date);`    
`Object.getPrototypeOf(date).constructor === Date;`    
`Date.prototype === Object.getPrototypeOf(date);`  


### 总结
- 每个函数都有 `prototype` 属性，除了 `Function.prototype.bind()`，该属性指向原型。
- 每个对象都有 `__proto__` 属性，指向了创建该对象的构造函数的原型。其实这个属性指向了 `[[prototype]]，但是 [[prototype]]`是内部属性，我们并不能访问到，所以使用 `__proto__`来访问。
- 对象可以通过 `__proto__` 来寻找不属于该对象的属性，`__proto__` 将对象连接起来组成了原型链。