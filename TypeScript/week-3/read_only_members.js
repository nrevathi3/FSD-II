class Student {
    name;
    rollNo;
    static college = "SVECW";
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    display() {
        console.log("Name:", this.name);
        console.log("Roll No:", this.rollNo);
        console.log("College:", Student.college);
    }
}
// Creating objects
let student1 = new Student("Revathi", 210);
let student2 = new Student("dinny", 421);
student1.display();
student2.display();
// Accessing static member using class name
console.log("College:", Student.college);
export {};
