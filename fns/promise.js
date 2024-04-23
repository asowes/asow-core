//const PENDING = "PENDING";
// const FULFILLED = "FULFILLED";
// const REJECTED = "REJECTED";
//
// function AsowPromise(executor) {
//   this.status = PENDING;
//   this.value = undefined;
//   this.reason = undefined;
//   this.onResolvedCallbacks = [];
//   this.onRejectedCallbacks = [];
//
//   let resolve = (value) => {
//     if (this.status === PENDING) {
//       this.status = FULFILLED;
//       this.value = value;
//       // 依次将对应的函数执行
//       this.onResolvedCallbacks.forEach((fn) => fn());
//     }
//   };
//
//   let reject = (reason) => {
//     if (this.status === PENDING) {
//       this.status = REJECTED;
//       this.reason = reason;
//       // 依次将对应的函数执行
//       this.onRejectedCallbacks.forEach((fn) => fn());
//     }
//   };
//
//   try {
//     executor(resolve, reject);
//   } catch (error) {
//     reject(error);
//   }
// }
//
// AsowPromise.prototype.then = function (onFulfilled, onRejected) {
//   if (this.status === FULFILLED) {
//     onFulfilled(this.value);
//   }
//
//   if (this.status === REJECTED) {
//     onRejected(this.reason);
//   }
//
//   if (this.status === PENDING) {
//     this.onResolvedCallbacks.push(() => {
//       onFulfilled(this.value);
//     });
//
//     this.onRejectedCallbacks.push(() => {
//       onRejected(this.reason);
//     });
//   }
// };
//
// const promise = new AsowPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved");
//   }, 2000);
// });
//
// promise.then(
//   (value) => console.log("Fulfilled:", value),
//   (reason) => console.log("Rejected:", reason)
// );

function AsowPromise(executor) {
  this.state = "pending";
  this.value = undefined;
  this.onFulfilled = [];
  this.onRejected = [];

  const resolve = (value) => {
    if (this.state === "pending") {
      this.state = "fulfilled";
      this.value = value;
      this.onFulfilled.forEach((callback) => callback(value));
    }
  };

  const reject = (reason) => {
    if (this.state === "pending") {
      this.state = "rejected";
      this.value = reason;
      this.onRejected.forEach((callback) => callback(reason));
    }
  };

  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

AsowPromise.prototype.then = function (onFulfilled, onRejected) {
  return new AsowPromise((resolve, reject) => {
    if (this.state === "fulfilled") {
      setTimeout(() => {
        try {
          const result = onFulfilled(this.value);
          resolve(result);
        } catch (e) {
          reject(e);
        }
      }, 0);
    }

    if (this.state === "rejected") {
      setTimeout(() => {
        try {
          const result = onRejected(this.value);
          resolve(result);
        } catch (e) {
          reject(e);
        }
      }, 0);
    }

    if (this.state === "pending") {
      this.onFulfilled.push((value) => {
        try {
          const result = onFulfilled(value);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
      this.onRejected.push((reason) => {
        try {
          const result = onRejected(reason);
          resolve(result);
        } catch (e) {
          reject(e);
        }
      });
    }
  });
};

const promise = new AsowPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 2000);
});

promise
  .then(
    (value) => {
      console.log("Fulfilled:", value);
      return "hello";
    },
    (reason) => console.log("Rejected:", reason)
  )
  .then((data) => {
    console.log(data);
  });
