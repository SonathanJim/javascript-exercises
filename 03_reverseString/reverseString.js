const reverseString = function(givenString) {
    
    let string = '';

    for (let i = givenString.length - 1; i>=0; i--) {
        string += givenString[i];
    }

    return string;
};

// Do not edit below this line
module.exports = reverseString;
