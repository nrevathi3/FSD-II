// any
let data = 250;
console.log("Data:", data);
data = "Hello TypeScript";
console.log("Data:", data);
// unknown
let userInput = "Learning TypeScript";
if (typeof userInput === "string") {
    console.log("Uppercase:", userInput.toUpperCase());
}
// void
function greet() {
    console.log("Welcome to TypeScript!");
}
greet();
// never
function error(msg) {
    throw new Error(msg);
}
// null and undefined
let x = null;
let y = undefined;
console.log("Null value:", x);
console.log("Undefined value:", y);
// object
let employee = {
    id: 101,
    name: "Revathi"
};
console.log("Employee:", employee);
export {};
