const debounce = (fn: () => void, ms?: number) => {
  let timer: number = 0;

  return (...args: any) => {
    if (timer) {
      clearTimeout(timer);
    }

    // @ts-ignore
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, ms || 300);
  };
};

const testFn1 = () => {
  console.log("test fn");
};

const debounce1 = debounce(testFn1, 500);

debounce1();
debounce1();
debounce1();
debounce1();
