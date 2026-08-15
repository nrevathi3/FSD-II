function display<T>(value: T): T {
    return value;
}

console.log(display<string>("TypeScript"));
console.log(display<number>(250));
console.log(display<boolean>(true));

/*
<T> → Generic type parameter
T → Represents the type passed to the function
display<string>() → Function works with strings
display<number>() → Function works with numbers
display<boolean>() → Function works with boolean values
*/

export {};