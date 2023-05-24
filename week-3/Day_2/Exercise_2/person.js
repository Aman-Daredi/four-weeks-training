function introduce(obj) {
    console.log("".concat(obj.firstName, " ").concat(obj.lastName, " is ").concat(obj.age, " years old"));
}
var person1 = {
    firstName: "Aman",
    lastName: "Daredi",
    age: 22,
};
introduce(person1);
