const instanceOf = (value, obj) => {
  if (typeof obj !== "function") {
    throw new Error("need object");
  }

  if (
    (typeof value !== "object" && typeof value !== "function") ||
    value === null
  ) {
    return false;
  }

  let valueProto = Object.getPrototypeOf(value);
  while (valueProto) {
    if (obj.prototype === valueProto) {
      return true;
    } else {
      valueProto = Object.getPrototypeOf(valueProto);
    }
  }
  return false;
};

console.log(instanceOf(1, Number));
console.log(instanceOf(Number, Object));
console.log(instanceOf(1, 2));
