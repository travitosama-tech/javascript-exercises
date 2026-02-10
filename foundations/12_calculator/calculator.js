const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let result = arr.reduce((sum, current) => sum + current, 0);
  return result;
};


const multiply = function(arr) {
  let result = arr.reduce((product, current) => product * current, 1);
  return result;
};

const power = function(base, exponent) {
  if (exponent == 0) return 1;
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result; 
};


const factorial = function(num) {
	if (num < 0) return undefined;
  if (num === 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
