function add(a, b, c, d) {
  console.log(a + b + c + d);
  return a + b + c + d;
}

// function addCurry(a) {
//   return function (b) {
//     return function (c) {
//       console.log(a + b + c);
//       return a + b + c;
//     };
//   };
// }
//
// addCurry(1)(2)(3);

function curry(fun, ...initArgs) {
  return function curried(...args) {
    const allArgs = [...initArgs, ...args];
    if (allArgs.length >= fun.length) {
      return fun.apply(this, allArgs);
    } else {
      return curry(fun, ...allArgs);
    }
  };
}

const curriedAdd = curry(add);
curriedAdd(3, 2, 1);
