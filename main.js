// Student Name: Uzma Azam
// Registration no: 00330608
// Day: Tuesday (9:00 am)
// Class Assignment_ 5
// Function:
// A function is a block of code designed to perform a particula task.
// Syntax for Function:
//function functionName(paramerter1,parameter2,...){
//function body: code to be executed
// Optionally, it can return a value using 'return' keyword.}
// functionName();
//Function in Typescript can have types specified for their parameters and return values.
//Here are some common types that can be specified:
// Using Function in Variable data:
// Primitive Types
// Funtion on String Parameter:
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Alice");
// Function on Number Parameter:
//// Function to add two numbers
function add(a, b) {
    return a + b;
}
// Execute add function
var result = add(3, 5);
console.log("Result of addition:", result);
// Function on Boolean Parameter:
function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));
console.log(isEven(-2));
// Function on Any:
function logValue(value) {
    console.log(value);
}
logValue(10);
logValue("Hello");
logValue(true);
logValue({ name: "Alice", age: 30 });
