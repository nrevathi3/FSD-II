"use strict";
// Arrow function without parameters
const greet = () => {
    console.log("Welcome to TypeScript!");
};
// Arrow function with parameters
const add = (a, b) => {
    console.log("Sum =", a + b);
};
// Arrow function with return type
const multiply = (a, b) => {
    return a * b;
};
// Calling functions
greet();
add(15, 25);
let result = multiply(6, 5);
console.log("Product =", result);
