const fibonacci = function() {
const fibonacciSequence = [];
const n = 10; // How many numbers to include in the sequence

fibonacciSequence[0] = 0;
fibonacciSequence[1] = 1;

for (let i = 2; i < n; i++) {
  fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
}

console.log(fibonacciSequence);
};

// Do not edit below this line
module.exports = fibonacci;
