// Type Annotations in TypeScript
// Number
let age = 20;
console.log("Age:", age);
// String
let studentName = "Revathi";
console.log("Name:", studentName);
// Boolean
let isStudent = true;
console.log("Is Student:", isStudent);
// Array
let marks = [92, 87, 95];
console.log("Marks:", marks);
// Object
let student = {
    name: "Revathi",
    age: 20,
};
console.log("Student:", student);
// Function Annotation
function add(a, b) {
    return a + b;
}
console.log("Addition:", add(15, 25));
// Optional Parameter
function greetings(name, city) {
    if (city) {
        console.log(`Hello ${name} from ${city}`);
    }
    else {
        console.log(`Hello ${name}`);
    }
}
greetings("Revathi");
greetings("Revathi", "Vijayawada");
// Union Type
let value;
value = "TypeScript";
console.log("Value:", value);
value = 100;
console.log("Value:", value);
export {};
