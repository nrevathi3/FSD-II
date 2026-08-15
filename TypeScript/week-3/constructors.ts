class Student {
    name: string;
    age: number;

    // Constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method
    display(): void {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}

// Creating an object
let student1 = new Student("Revathi", 20);

// Calling method
student1.display();

export {};
