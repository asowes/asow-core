const judgeDataType = (data) => {
  const type = Object.prototype.toString.call(data);
  if (type === "[object Array]") {
    return "array";
  } else if (type === "[object Object]") {
    return "object";
  } else {
    return typeof data;
  }
};

const deepClone = (originalData) => {
  // console.log(originalData);
  const obj = {};
  for (let field in originalData) {
    const fieldValue = originalData[field];
    if (judgeDataType(fieldValue) === "object") {
      obj[field] = deepClone(fieldValue);
    } else if (judgeDataType(fieldValue) === "array") {
      obj[field] = fieldValue;
    } else {
      obj[field] = fieldValue;
    }
  }
  return obj;
};

const data = {
  name: "asow",
  age: "22",
  technology: {
    frontEnd: ["react", "vue", "js"],
    afterEnd: ["java", "nest"],
    dataBase: ["mysql", "redis"],
  },
  days: [
    { day: "2022-02-18", todo: ["001", "002"] },
    { day: "2022-02-19", todo: ["003", "004"] },
    { day: "2022-02-20", todo: ["005", "006"] },
    { day: "2022-02-21", todo: ["007", "008"] },
  ],
};

const cloneDate = deepClone(data);
console.log(cloneDate);
