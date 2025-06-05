// Exercise 1 - Kelvin Weather
// A constant variable declared to set forecast value in Kelvin.
// This value will not change.
const kelvin = 293;
console.log(`The temperature in Kelvin is: ${kelvin}K`);

// Variable to store temperature in celsius retrieved
// by subtracting temperature in Kelvin.
const celsius = kelvin - 273;
console.log(`The temperature in Degree Celsius is: ${celsius}C`);


/*Temperature in fahrenheit derived from formula 
and stored in fahrenheit variable. 
The result is rounded using Math objects .floor method.*/

// let fahrenheit = celsius * (9 / 5) + 32;
// fahrenheit = Math.floor(fahrenheit);

function convertCelsiusToFahrenheit(celsius) {
  return Math.floor(celsius * (9 / 5) + 32);
}
let fahrenheit = convertCelsiusToFahrenheit(celsius);
console.log(`The temperature in Fahrenheit is: ${fahrenheit}F`);


//Convert Celsius to Newton using the formula and 
// round down the result using Math.floor().
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature in Newton is: ${newton}N`);
