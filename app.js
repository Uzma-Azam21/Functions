// Function on Objects Parameter:
function printUserInfo(user) {
    console.log("Name:", user.name);
    console.log("Age:", user.age);
    console.log("Email:", user.email);
}
// Example object representing a user
var user = {
    name: "Robert Doe",
    age: 30,
    email: "robert.doe@example.com"
};
// Call the function with the user object as the argument
printUserInfo(user);
// Function on Array Parameter:
function calculateSum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
// Example array of numbers
var numbers = [1, 2, 3, 4, 5];
// Call the function with the array of numbers as the argument
var results = calculateSum(numbers);
console.log("Sum of numbers:", results);
// Function that accepts a parameter of type NumberOrString
function displayValue(value) {
    console.log(value);
}
// Call the function with a number
displayValue(10);
// Call the function with a string
displayValue("Hello");
// Function that accepts a MathOperation function as parameter
function performOperation(operation, a, b) {
    return operation(a, b);
}
// Example operations
var adds = function (x, y) { return x + y; };
var subtract = function (x, y) { return x - y; };
// Perform addition
console.log("Addition:", performOperation(adds, 5, 3));
// Perform subtraction
console.log("Subtraction:", performOperation(subtract, 10, 4));
