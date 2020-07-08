/**
 * Validates the provided string for number validity. Decimals and negative numbers are allowed.
 * 
 * @param {String} str The string to be validated.
 * 
 * @return {Boolean} Whether the string is a valid number.
 */

var isValidNumber = function (str) {

    // Map of valid types
    let validMap = {
        str: ["string"]
    };
    let validityError = require("../validateType.js")({
        str: str
    }, validMap);

    if (validityError) throw new TypeError(validityError.msg);

    if (str.length === 0) return false;

    /* -------- Validation ends, actual code below -------- */

    // This is a very simple function that just uses isNaN.
    // It exists mainly for cross-platform support :)
    try {
        return !isNaN(str);
    } catch (e) {
        return null;
    }

}

module.exports = isValidNumber;