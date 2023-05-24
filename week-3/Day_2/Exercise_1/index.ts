function greet(name: string): string {
        return `Hello ${name}!`;
}


// This works properly
console.log(greet("Aman"));


// This gives me error : Argument of type 'number' is not assignable to parameter of type 'string'.
// console.log(greet(10));

// This gives me error : Expected 1 arguments, but got 0. An argument for 'name' was not provided.
// console.log(greet());