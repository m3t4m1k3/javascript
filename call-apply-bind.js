// Call, Apply and Bind

function logName(...args) {
    return this.name + args.join(" ");
}

const myObj = {
    name: "Object 1: ",
    myFunc: logName
};

const myObj2 = {
    name: "Object 2: ",
    myFunc: logName
};

// A standard function call using the implicit 'this' binding of myObj
// const result = myObj.myFunc("poodle");

// The above is essentially the same as:
// const result = myObj.myFunc.call(myObj, "poodle");

// Using call() to explicitly bind 'this' to myObj2
// const result = myObj.myFunc.call(myObj2, "poodle", "doodle", "noodle");

// Using apply() to explicitly bind 'this' to myObj2
// Same as call() but accepts and array of args in place of multiple args
// const result = myObj.myFunc.apply(myObj2, ["poodle", "doodle", "noodle"]);

// Using bind() to explicitly bind 'this' to myObj2
// Same as call() except it returns a new function with the explicit binding
const boundFunction = myObj.myFunc.bind(myObj2);
const result = boundFunction("poodle", "doodle", "noodle");

console.log(result);
