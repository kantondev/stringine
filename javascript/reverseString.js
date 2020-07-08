/**
 * This function provides a (minor) simplification for reversing a JavaScript string.
 * 
 * @param {String} str The string to be reversed.
 * 
 * @return {String} A reversed version of `str`.
 */
var reverseString = function (str) {

    let char_arr = str.split("").reverse(),
    char_string = char_arr.join("");
    
    return char_string;
    
}

module.exports = reverseString;