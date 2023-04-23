Function.prototype.asowApply = function (thisArg, args) {
  if (typeof thisArg !== "object" || thisArg == null) {
    thisArg = new Object(thisArg);
  }

  const key = Symbol();

  thisArg[key] = this;

  const result = thisArg[key](...args);
  delete thisArg[key];
  return result;
};

function f(...args) {
  console.log("hi", this.name, this.age, ...args);
}

const obj = { name: "666", age: 18 };

f.apply(obj, ["arg1", "arg2"]);
f.asowApply(obj, ["arg1", "arg2"]);
