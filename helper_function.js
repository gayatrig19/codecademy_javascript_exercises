// function that converts the temperature from Celsius to Fahrenheit.
function multiplyByNineFifths(number) {
    return number * (9/5);
}

function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
}

const celsiusToFahrenheit = getFahrenheit(15);
console.log(celsiusToFahrenheit);
