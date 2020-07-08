/**
 * This function provides a (minor) simplification for reversing a JavaScript string.
 * 
 * @param {String} str The string to be reversed.
 * 
 * @return {String} A reversed version of `str`.
 */
var reverse = function (str) {

    // Map of valid types
    let validMap = {
        str: ["string"]
    };
    let validityError = require("../validateType.js")({
        str: str
    }, validMap);

    if (validityError) throw new TypeError(validityError.msg);
    
    if (str.length === 0) return null;

    /* -- Validation ends, actual code below -- */

    try {
        let char_arr = str.split("").reverse(),
        char_string = char_arr.join("");
        
        return char_string;
    } catch (e) {
        return null;
    }
    
    
}

module.exports = reverse;