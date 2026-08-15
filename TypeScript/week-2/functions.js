"use strict";
// Function with no parameter and no return type
function greet() {
    console.log("Welcome to TypeScript!");
}
// Function with parameters but no return type
function add(a, b) {
    console.log("Sum =", a + b);
}
// Function with parameters and a return type
function multiply(a, b) {
    return a * b;
}
// Calling function with no parameters
greet();
// Calling function with parameters
add(15, 25);
// Calling function with parameters and return value
let result = multiply(6, 5);
console.log("Product =", result);
