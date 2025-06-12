/* 1. Simple function that takes `humanAge` as a parameter,  
returns the human age in dog years. */

function calculateDogYears(humanAge) {
    // The first two years of a dog’s life count as 10.5 dog years each.
    let firstTwoDogYears = 2 * 10.5;

    // Subtract the first two years from the human age. 
    // Multiply laterYears by 4 to convert to dog years.
    let remainingDogYears = (humanAge - 2) * 4;
    return firstTwoDogYears + remainingDogYears;
}
let myAgeInDogYears = calculateDogYears(25);
console.log(myAgeInDogYears);


// Input-Based Human to Dog Age Converter
let userName = prompt("Enter your name:").toLowerCase();
let userAge = prompt("Enter your age:");

