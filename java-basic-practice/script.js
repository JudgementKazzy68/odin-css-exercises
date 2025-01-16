"use strict "

function add7(myNumber) {
    return myNumber + 7;
}

console.log(add7(4));

const multiply = function (num1, num2) {
    return num1 * num2;
}

console.log(multiply(5, 3));

// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

/*
1. make every letter lowercase
2. capitalize 1st letter
*/

// function capitalize(myString) {
//     const inLowerCase = myString.toLowerCase();
//     const firstLetter = inLowerCase[0].toUpperCase();
//     const output = inLowerCase.replace(inLowerCase[0], firstLetter)
//     console.log(output);
// }

// capitalize("Hungary");

// Write a function called lastLetter that takes a string and returns the very last letter of that string:

let lastLetter = (myString) => myString.substr(-1, 1);

console.log(lastLetter("Hungary"));