"use strict";
/*
let hasDriversLicence = false;
const passTest = true;

// if (passTest) hasDriverLicence = true; // script.js:6 Uncaught ReferenceError: hasDriverLicence is not defined
// at script.js:6:32
if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log("I can drive :D");

// const interface = "audio"; //Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:9:7)
*/

////////////// Functions //////////////
/*
function logger() {
  // defining the function
  console.log("My name is Harshit.");
}

logger(); // calling / running / invoking the function.
logger();
logger();

function fruitProcessor(apples, oranges) {
  //   console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

////////////// Function Declaeration vs Function Expression //////////////
/*
// const age1 = calcAge1(1986);
// Function Declaeration
function calcAge1(birthYear) {
  return new Date().getFullYear() - birthYear;
}

const age1 = calcAge1(1986);

// console.log(`You are ${calcAge1(1986)} years old.`);
// const age1 = calcAge1(1986);
// const age2 = calcAge2(1986);

// Function Expression
// const age2 = calcAge2(1986);
const calcAge2 = function (birthYear) {
  return new Date().getFullYear() - birthYear;
};

// console.log(`You are ${calcAge2(1986)} years old.`);
const age2 = calcAge2(1986);

console.log(age1, age2);
console.log(typeof age1, typeof age2);

// console.log(x);
// var x = 5;
*/
