namespace Student {
    export let name: string = "Revathi";

    export function display(): void {
        console.log("Student Name:", name);
    }
}

/*
Why export is used?

Members inside a namespace are private by default.
The export keyword allows them to be accessed outside
the namespace.
*/

Student.display();

export {};