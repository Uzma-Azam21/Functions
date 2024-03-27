// Function on Objects Parameter:
function printUserInfo(user) {
  console.log("Name:", user.name);
  console.log("Age:", user.age);
  console.log("Email:", user.email);
}

 // Example object representing a user
const user = {
  name: "Robert Doe",
  age: 30,
  email: "robert.doe@example.com"
};

 // Call the function with the user object as the argument
printUserInfo(user);

// Function on Array Parameter:
function calculateSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

 // Example array of numbers
const numbers = [1, 2, 3, 4, 5];

 // Call the function with the array of numbers as the argument
const results = calculateSum(numbers);
console.log("Sum of numbers:", results); 

// Function on Union Parameter:
// A union type in Typescript allows a variable, parameter,or return value to have multiple possible types.
// Define a union type for the parameter
type NumberOrString = number | string;

// Function that accepts a parameter of type NumberOrString
function displayValue(value: NumberOrString) {
  console.log(value);
}

// Call the function with a number
displayValue(10); 

// Call the function with a string
displayValue("Hello"); 

//Function on Alias Parameter:
// "A function alias in TypeScript is like giving a nickname to a specific type of function signature. It's a way to create a shorthand name for a particular pattern of function parameters and return type, making code easier to understand and maintain. This alias can then be used throughout your codebase wherever that specific function signature is needed."

// Define a type alias for the function signature
type MathOperation = (x: number, y: number) => number;

// Function that accepts a MathOperation function as parameter
function performOperation(operation: MathOperation, a: number, b: number): number {
  return operation(a, b);
}

// Example operations
const adds: MathOperation = (x, y) => x + y;
const subtract: MathOperation = (x, y) => x - y;

// Perform addition
console.log("Addition:", performOperation(adds, 5, 3)); 

// Perform subtraction
console.log("Subtraction:", performOperation(subtract, 10, 4));