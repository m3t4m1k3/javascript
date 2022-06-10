// Object Destructuring

const player = {
  fullName: "Michael Jordan",
  club: "Chicago Bulls",
  address: {
    city: "Chicago",
    state: "Illinois",
  },
};

// Destructure objects and values that contain objects
const {
  fullName,
  address: { city },
} = player;

const str = `${fullName} is from ${city}.`;

console.log(str);
// Return: "Michael Jordan is from Chicago"

// Array Destructuring
const arr = ["Winnie", "The", "Poo"];
const [firstName, middleName, lastName] = arr;

console.log(firstName, middleName, lastName);
// Result: "Winnie the Poo"
