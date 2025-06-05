// Exercise 2 - Dog Years
/* Objective - How old would you be if you were a dog? 
Convert your age from “human years” to “dog years” */

// Variable to store current human age.
let myAge = 25;

// Variable to store the first two years of a dog's life.
let earlyYears = 2;

// The first two years of a dog’s life count as 10.5 dog years each.
// Multiply earlyYears by 10.5 to convert to dog years.
earlyYears *= 10.5;

// Subtract the first two years from the human age.
let laterYears = myAge - 2;

// Each year after the first two counts as 4 dog years.
// Multiply laterYears by 4 to convert to dog years.
laterYears *= 4;

console.log(`Early Years: ${earlyYears}`);
console.log(`Later Years: ${laterYears}`);

// Calculate human age in dog years by summing early and later years.
let myAgeInDogYears = earlyYears + laterYears;

// Store name in lowercase using the .toLowerCase() method.
let myName = "John Doe".toLowerCase();

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);

