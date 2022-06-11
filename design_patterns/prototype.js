// prototype.js

const person = {
  eat(food) {
    return `Yum, ${food} is delicious!`;
  }
};

const sam = Object.create(person, { name: { value: "Sam" }});

console.log(sam.eat());

Object.getPrototypeOf(sam);

Array.prototype.bad = function() {
  console.log("I'm bad");
}
