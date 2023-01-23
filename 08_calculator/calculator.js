const add = function(numberOne, numberTwo) {
  return (numberOne + numberTwo);
};

const subtract = function(numberOne,numberTwo) {
	return (numberOne - numberTwo);
};

const sum = function(array) {
  let total = 0;
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
    total += array[i];
    }
    return total;
  }
  else {
    return 0;
  }
};

const multiply = function(array) {
  let number = array[0];
  if (array.length > 0) {
    for (let i = 1; i < array.length; i++) {
    number *= array[i];
    }
    return number;
  }
  else {
    return 0;
  }
};

const power = function(numberOne,numberTwo) {
	let answer = numberOne ** numberTwo;
  return answer;
};

const factorial = function(number) {
  let answer = number;
  if (number == 0) {
    return 1
  } else {
    for (let i = 1; i<number; i++) {
      answer *= i;
    }
  }
  return answer;
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
