// any
let data: any = 250;
console.log("Data:", data);

data = "Hello TypeScript";
console.log("Data:", data);

// unknown
let userInput: unknown = "Learning TypeScript";

if (typeof userInput === "string") {
    console.log("Uppercase:", userInput.toUpperCase());
}

// void
function greet(): void {
    console.log("Welcome to TypeScript!");
}

greet();

// never
function error(msg: string): never {
    throw new Error(msg);
}

// null and undefined
let x: null = null;
let y: undefined = undefined;

console.log("Null value:", x);
console.log("Undefined value:", y);

// object
let employee: object = {
    id: 101,
    name: "Revathi"
};

console.log("Employee:", employee);

export{}