// Type Annotations in TypeScript

// Number
let age: number = 20;
console.log("Age:", age);

// String
let studentName: string = "Revathi";
console.log("Name:", studentName);

// Boolean
let isStudent: boolean = true;
console.log("Is Student:", isStudent);

// Array
let marks: number[] = [92, 87, 95];
console.log("Marks:", marks);

// Object
let student: {
    name: string;
    age: number;
} = {
    name: "Revathi",
    age: 20,
};

console.log("Student:", student);

// Function Annotation
function add(a: number, b: number): number {
    return a + b;
}

console.log("Addition:", add(15, 25));

// Optional Parameter
function greetings(name: string, city?: string): void {
    if (city) {
        console.log(`Hello ${name} from ${city}`);
    } else {
        console.log(`Hello ${name}`);
    }
}

greetings("Revathi");
greetings("Revathi", "Vijayawada");

// Union Type
let value: string | number;

value = "TypeScript";
console.log("Value:", value);

value = 100;
console.log("Value:", value);

export{}