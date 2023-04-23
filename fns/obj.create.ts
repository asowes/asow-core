const create = (proto: any) => {
  if (proto === null) {
    throw new Error("不支持传入null");
  }
  if (typeof proto !== "function" && typeof proto !== "object") {
    throw new TypeError("类型只能为方法或者对象");
  }

  function F() {}

  F.prototype = proto;

  // @ts-ignore
  return new F();
};

const obj = { name: "asow" };
const c = create(obj);
console.log(c);
console.log(c.name);
