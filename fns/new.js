const New = (constructor, ...args) => {
  const protoObj = Object.create(constructor.prototype);

  const obj = constructor.apply(protoObj, args);

  return typeof obj === "object" ? obj : protoObj;
};

function Person(name) {
  this.name = name;
}

Person.prototype.say = function () {
  console.log("hi", this.name);
};

const person1 = New(Person, "asow");
person1.say();

const person2 = New(Person, "hi");
person2.say();

function A(name) {
  return { name };
}

const a = New(A, "123");
console.log(a);
