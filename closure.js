// Closure

// Fireship.io Closure explanation
// https://www.youtube.com/watch?v=vKJpN5FAeF4

// Will Sentence also has a great explanation of closure.

// A tricky example of closure
// Because of the var usage, i is hoisted to global scope and therefore each closure is referencing the global variable i
// Because of the setTimeout, by the time the functions are returned to the call stack from the callback queue the global variable i's value is 3.
// If let was used the scop of i would be limited to the function and each closure would have separate instance of the i variable in its closure.

for (var i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    };

    setTimeout(log, 100);
}
