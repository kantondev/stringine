/**
 * Rotates the string (moves the specified amount of characters from the end of the string to the start).
 * 
 * @param {String} str The string to be rotated.
 * @param {Number} [count=1] How many characters should be moved (1 is only the first character, etc...). Defaults to 1.
 * @param {String} [separator=""] A string that should separate the moved characters and the original characters. For example, rotating `1234` with a count of `1` and a separator of `+` would result in `4+123`. Defaults to no separator.
 * 
 * @return {null|String} The modified string (or unmodified, in case `count` was 0, the string was 1 character long, etc).
 * 
 * Returns `null` if the arguments are not valid or an error occurs.
 * 
 * Warning: this will return `null` if you try to move more characters than the string has.
 */

var rotate = function (str, count = 1, separator = "") {

    if (str.length === 0) return null;
    if (count < 0 || count > str.length) return null;

    /* -- Validation ends, actual code below -- */

    try {
        let ind = str.length - count;
        return str.substring(ind, str.length) + separator + str.substring(0, ind);
    } catch (e) {
        return null;
    }

}

module.exports = rotate;