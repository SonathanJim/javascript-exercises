const palindromes = function (string) {
    //declare variable for punctuation and whitespace regexp
    const regex = /[!@€#£$%^&*()\-_=+[{}\];:'"\\|,<.>\/?`~§± ]/g;
    //remove whitespace and punctuation
    const palTestString = string.replace(regex, '');
    //reverse string
    const reverseString = function (string) {
        const revArray = [];
        const length = string.length - 1;
        for(let i = length; i >= 0; i--) {
            revArray.push(string[i]);
        }
        return revArray.join('');
    }

    //check if palindrome ie. does string === stringBackwards
    if ((palTestString.toLowerCase()) === (reverseString(palTestString).toLowerCase())){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
