//repeatString('hey', 3) // returns 'heyheyhey'
//Create a variable to hold the string you're going to return, 
//create a loop that repeats the given number of times and 
//add the given string to the result on each loop.

const repeatString = function(givenString, num) {
    let string = '';
    
    if (num <0) {return "ERROR"}
    
    {let i=1;
        while (num>=i) {
            string += `${givenString}`;
            i++
        };
    return string;}
};

// Do not edit below this line
module.exports = repeatString;
