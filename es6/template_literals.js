// Template Literals

// Use back ticks
``;

// Equivalent to string
console.log(`String` === "String");
// true

// Interpolating with ${} converts the value to a string by calling the .toString() method
// Does not work well for arrays and objects

console.log([1, 2, 3].toString());
// '1,2,3'

console.log({ a: 1 }.toString());
// [object Object]

const obj = { a: 1 };
console.log(`an object: ${obj}`);
// "an object: [object Object]
