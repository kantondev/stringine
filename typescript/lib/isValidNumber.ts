/**
 * Validates the provided string for number validity. Decimals and negative numbers are allowed.
 * 
 * @param {String} str The string to be validated.
 * 
 * @return {Boolean} Whether the string is a valid number.
 */

var isValidNumber = function (str : string) : boolean|null {

    if (str.length === 0) return false;

    /* -- Validation ends, actual code below -- */

    // This is a very simple function that just uses isNaN.
    // It exists mainly for cross-platform support :)
    try {
        return !isNaN(Number(str));
    } catch (e) {
        return null;
    }

}

export default isValidNumber;