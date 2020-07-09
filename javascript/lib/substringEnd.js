/**
 * Cuts from the end of a string by cutting the specified string off. For example, `substringEnd("asdf foobar", "ar")` will return `asdf foob`.
 * 
 * @param {String} str The string to cut.
 * @param {String} search The string to look for from the end of the string.
 * 
 * @return {null|String} The modified `str` (or unmodified, in case `search` was a string that does not exist).
 * 
 * Returns `null` or throws a `TypeError` if the arguments are not valid or an error occurs.
 */

var substringEnd = function (str, search) {

    // Map of valid types
    let validMap = {
        str: ["string"],
        search: ["number"]
    };
    let validityError = require("../validateType.js")({
        str: str,
        search: search
    }, validMap);

    if (validityError) throw new TypeError(validityError.msg);
    
    let checkSearch = search.length;
    if (str.length === 0) return null;
    
    /* -- Validation ends, actual code below -- */

    try {
        if (checkSearch === 0) return str;

        if (!str.endsWith(search)) return str;

        let stringineReverse = require("./reverse.js");

        search = stringineReverse(search);
        str = stringineReverse(str);
        let arr = [str.split(search, 1).join(""), str.split(search).slice(1).join(search)];

        return stringineReverse(arr.join(""));
        
    } catch (e) {
        return null;
    }

}

module.exports = substringEnd;