const fibonacci = function(index) {
    if (Math.sign(index) === -1) {
        return "OOPS"
    } else {
        const goldenRatio = 1.618034;
        const number = ((goldenRatio**index) - ((1-goldenRatio)**index))/Math.sqrt(5);
        return Math.round(number);
    }
};

// Do not edit below this line
module.exports = fibonacci;
