class Student {
    name;
    age;
    course;
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
    display() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Course:", this.course);
    }
}
class Details extends Student {
    showCourse() {
        console.log("Course:", this.course);
    }
}
// Creating object
let student = new Details("Revathi", 20, "AIML");
// Public member can be accessed outside
console.log("Student Name:", student.name);
// Private member cannot be accessed directly
// console.log(student.age);  // Error
// Protected member cannot be accessed directly outside class
// console.log(student.course);  // Error
student.display();
student.showCourse();
export {};
