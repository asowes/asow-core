Function.prototype.asowBind = function (context) {
  const fn = this;
  console.log(context);
  const args = Array.prototype.slice.call(arguments, 1);
  console.log(args);

  return function () {
    const bindArgs = Array.prototype.slice.call(arguments);
    return fn.apply(context, args.concat(bindArgs));
  };
};

const person = {
  firstname: "John",
  lastname: "Doe",
};

function greet(greeting) {
  console.log(greeting + " " + this.firstname + " " + this.lastname);
}

const greetPerson = greet.asowBind(person, "Hello");

greetPerson();
