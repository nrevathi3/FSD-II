// Arrow function without parameters
const greet = (): void => {
    console.log("Welcome to TypeScript!");
};

// Arrow function with parameters
const add = (a: number, b: number): void => {
    console.log("Sum =", a + b);
};

// Arrow function with return type
const multiply = (a: number, b: number): number => {
    return a * b;
};

// Calling functions
greet();

add(15, 25);

let result = multiply(6, 5);
console.log("Product =", result);

export{}