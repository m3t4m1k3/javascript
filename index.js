// index.js

// Sum all elements in an array of numbers

const sum = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

// function sum(arr = [0]) {
//   return arr.length === 0 ? 0 : arr.reduce((acc, num) => acc + num);
// }

export { sum };
