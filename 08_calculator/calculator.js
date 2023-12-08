const add = function(...input) {
  return input.reduce((accumulator, current) => accumulator + current);
};

const subtract = function(...input) {
  return input.reduce((accumulator, current) => accumulator - current);
};

const sum = function(input) {
  return input.reduce((accumulator, current) => accumulator + current, 0);
};

const multiply = function(input) {
  return input.reduce((accumulator, current) => accumulator * current);
};

const power = function(x, y) {
  return Math.pow(x, y);
};

const factorial = function(x) {
	if (x === 0 || x === 1) return 1;
  else return x * factorial(x - 1);
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
