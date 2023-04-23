const throttle = (fn: () => void, ms?: number) => {
  let timer: number = 0;

  return (...args: any) => {
    if (timer) return;
    // @ts-ignore
    // 进入该方法立马将timer设置成 setTimeout的返回值 以此下一次执行时被return
    timer = setTimeout(() => {
      fn.apply(this, ...args);
      // xx ms之后将timer设置成0 以此让下一次执行时不被return
      timer = 0;
    }, ms || 300);
  };
};

const testFn = () => {
  console.log("test fn");
};

const throttle1 = throttle(testFn, 3000);
throttle1();

setInterval(() => {
  throttle1();
}, 1000);
