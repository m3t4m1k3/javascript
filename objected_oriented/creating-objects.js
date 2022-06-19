// creating-objects.js

// Creating Objects

/*
    Best learning Resources:
        - Frontend Masters: The Hard Parts: Object Oriented JavaScript
            - https://frontendmasters.com/courses/object-oriented-js/
*/

// Object Constructor Functions
// What is the constructor function doing behind the scenes?
// What doe the new keyword trigger behind the scenes?

// Class Constructors
// This is just syntactic sugar over top of the constructor functions.
// What exactly is it doing behind the scenes?
const data = {
    mike: {
        name: "Mike",
        age: 38,
        location: "Thailand"
    },
    sam: {
        name: "Sam",
        age: 25,
        location: "Australia"
    }
};

class Human {
    constructor(data) {
        // this.name = data.name;
        // this.age = data.age;
        // this.location = data.location;
        Object.assign(this, data);
        // Object
    }

    detailString() {
        const { name, age, location } = this;

        return `${name} is ${age} and is currently in ${location}`;
    }
}

const mike = new Human(data.mike);

console.log(mike.detailString());
