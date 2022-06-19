// objects.js

// Object
// Static Methods

// Object.defineProperty()

const person = {
    name: "Mike",
    age: 38
};

Object.defineProperty(person, "id", {
    // value: 1,
    get: () => this.id,
    set: (id) => {
        id = id;
    }
});

console.log(person);

person.id = 4; //?

// person.id = 4;

person["id"]; //?
