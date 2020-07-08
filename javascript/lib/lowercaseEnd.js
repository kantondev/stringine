/**
 * Converts the specified amount of characters from the end of the provided string to lowercase.
 * 
 * @param {String} str The string to be converted.
 * @param {Number} [count=1] How many characters should be converted (1 is only the first character, etc...). Defaults to 1.
 * 
 * @return {String} The modified string (or unmodified, in case the characters were already lowercase, `count` was 0, etc).
 */

var lowercaseEnd = function (str, count = 1) {

    // Map of valid types
    let validMap = {
        str: ["string"],
        count: ["number"]
    };
    let validityError = require("../validateType.js")({
        str: str,
        count: count
    }, validMap);

    if (validityError) throw new TypeError(validityError.msg);

    if (str.length === 0) return null;
    if (count < 0) return null;

    /* -- Validation ends, actual code below -- */

    try {
        if (count == 0) return str;

        let char_str, output_str;

        let stringineReverse = require("./reverse.js");
        str = stringineReverse(str);

        let intact = str.substring(count, str.length);
        char_str = str.substring(0, count);

        output_str = char_str.toLowerCase();
        
        return stringineReverse(output_str + intact);
    } catch (e) {
        return null;
    }

}

module.exports = lowercaseEnd;