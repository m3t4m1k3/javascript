# Prototype

- Prototype is a creational design pattern.
- It is essentially cloning an existing object (The prototype) and adding additional properties and methods.
- In most OOP languages classes are extended with subclasses.
  - This can lead to complex hierarchies
- The prototype pattern is an alternative way to implement inheritance.
- Instead of inheriting functionality from a class, it comes from an object that has already been created.
- This creates a flat prototype chain that is easier to share functionality between objects.
  - This is especially true for a dynamic language like JavaScript which supports prototypal inheritance out of the box.

```JavaScript
const person = {
  eat(food) {
    return `Yum, ${food} is delicious!`;
  }
};

const sam = Object.create(person, { name: { value: "Sam" }});
```

If we log the new object 'sam' the eat method will not be visible on the object. But we are able to call the method without any issues.

```JavaScript
console.log(sam.eat());
```

This is because it will look up the prototype chai for this method until it reaches and object who has the prototype of null.

We can access the prototype of the object by accessing the `object.__proto__` property, however this method is no longer a modern best practice. We should use the following method:

```JavaScript
Object.getPrototypeOf(sam);
```

Classes in JavaScript prototype refers to the constructor. This means we can extend a class with additional function if we want to, however this is also generally considered a bad practice.

```JavaScript
Array.prototype.bad = function() {
  console.log("I'm bad");
}
```
