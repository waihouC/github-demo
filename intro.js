// MUST ADD THIS: with 'yarn add prompt-sync' in terminal
const prompt = require('prompt-sync')();

// print to console
console.log("Hello world!");

// declare variable
let firstName = "John";
console.log(firstName);

// reassign variable
firstName = "Rosa";

// input
let age = prompt("Enter your age: ");
console.log("You are", age, "years old.");