const convertToCelsius = function(temp) {
    let celsius = (temp - 32) * fraction.numerator / fraction.denominator
    return Math.round(celsius * 10) / 10
};

const fraction = {
  numerator: 5,
  denominator: 9
};

const convertToFahrenheit = function(temp) {
    let fahrenheit = (temp * (fractionTwo.numerator / fractionTwo.denominator) + 32)
    return Math.round(fahrenheit * 10) / 10
};

const fractionTwo = {
  numerator: 9,
  denominator: 5
};

console.log(convertToFahrenheit(73.2));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
