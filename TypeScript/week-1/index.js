// Variables
let studentName = "Revathi!";
let age = 19;
let isStudent = true;
// Array
let subjects = ["TypeScript", "DBMS", "Angular"];
// Function
function greet(name) {
    return `Hello, ${name}! Welcome to TypeScript.`;
}
// Object
let student = {
    name: studentName,
    age: age,
    isStudent: isStudent
};
// Output
console.log(greet(studentName));
console.log("Age:", age);
console.log("Student:", isStudent);
console.log("Subjects:", subjects);
console.log("Student Details:", student);
export {};
