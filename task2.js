"use strict";

const ps = require("prompt-sync");
const prompt = ps();
let number = prompt("Enter the number: ");

for(let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}