const sumAll = function(num1,num2) {
//create a variable to hold the final sum
//loop through the given numbers
//on each iteration add the number to the sum
//return the sum after finishing the loop
    if (typeof num1 === 'number' && typeof num2 === 'number' && num1>=0 && num2>=0) {
        if (num1>num2) {
            let finalSum = 0
            for (let i = +num2; i <= +num1; i++) {
            finalSum += i;
            }   
            return finalSum;
        } else {let finalSum = 0
            for (let i = +num1; i <= +num2; i++) {
                finalSum += i;
            }
        return finalSum;
    }};
    return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
