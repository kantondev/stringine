/**
 * Generates a sequence of random characters, as instructed by the character map.
 * 
 * @param {Number} length The length of the sequence to be generated.
 * @param {Array} charMap An array of all characters allowed to include in the sequence.
 * 
 * @return {null|String} The generated string.
 * 
 * Returns `null` or throws a `TypeError` if the arguments are not valid or an error occurs.
 */

var randomChars = function (length, charMap) {

    // Map of valid types
    let validMap = {
        length: ["number"],
        charMap: ["object"]
    };
    let validityError = require("../validateType.js")({
        length: length,
        charMap: charMap
    }, validMap);

    if (validityError) throw new TypeError(validityError.msg);

    if (length === 0) return null;

    /* -- Validation ends, actual code below -- */

    try {
        if (charMap.length === 0) return "";

        let output_str = "";

        for (let i = 0; i < length; i++) {
            let item = charMap[Math.floor(Math.random()*charMap.length)];

            if (item.length != 1) return null;
            else output_str += item;
        }
        
        return output_str;
    } catch (e) {
        return null;
    }

}

module.exports = randomChars;