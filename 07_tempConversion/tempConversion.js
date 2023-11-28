const convertToCelsius = function(fah) {
  return Number(((fah - 32) * 5 / 9).toFixed(1))
};

const convertToFahrenheit = function(cel) {
  return Number((cel * 9 / 5 + 32).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
