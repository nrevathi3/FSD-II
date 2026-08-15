// Function with no parameter and no return type
function greet(): void {
    console.log("Welcome to TypeScript!");
}

// Function with parameters but no return type
function add(a: number, b: number): void {
    console.log("Sum =", a + b);
}

// Function with parameters and a return type
function multiply(a: number, b: number): number {
    return a * b;
}

// Calling function with no parameters
greet();

// Calling function with parameters
add(15, 25);

// Calling function with parameters and return value
let result: number = multiply(6, 5);
console.log("Product =", result);

export{}