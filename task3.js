"use strict";

const ps = require("prompt-sync");
const prompt = ps();

// program for a simple calculator

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseInt(prompt('Enter first number: '));
const number2 = parseInt(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);