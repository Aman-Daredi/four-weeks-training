interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

function introduce(obj: Person) {
    console.log(`${obj.firstName} ${obj.lastName} is ${obj.age} years old`);
    
}


const person1 : Person = {
    firstName: "Aman",
    lastName: "Daredi",
    age: 22,
}

introduce(person1);