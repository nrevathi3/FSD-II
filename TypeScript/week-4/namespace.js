var Student;
(function (Student) {
    Student.name = "Revathi";
    function display() {
        console.log("Student Name:", Student.name);
    }
    Student.display = display;
})(Student || (Student = {}));
/*
Why export is used?

Members inside a namespace are private by default.
The export keyword allows them to be accessed outside
the namespace.
*/
Student.display();
export {};
