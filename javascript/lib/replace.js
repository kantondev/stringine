/**
 * Replaces all occurrences of a string with another.
 * 
 * @param {String} str The string to search `search` strings from.
 * @param {String} search The string to search for.
 * @param {String} replaceWith The string to replace all `search` occurrences from within.
 * @param {Number} [count=-1] The maximum amount of occurrences to be replaced. `-1` means no limit making it the default value.
 * @param {Boolean} [caseInsensitive=false] Whether the search should be case insensitive. Defaults to `false`.
 * 
 * @return {null|String} The modified (or unmodified, in case of no matches) string.
 * 
 * Returns `null` or throws a `TypeError` if the arguments are not valid or an error occurs.
 */
var replace = function (str, search, replaceWith, count = -1, caseInsensitive = false) {

    // Map of valid types
    let validMap = {
        str: ["string"],
        search: ["string"],
        replaceWith: ["string"],
        count: ["number"],
        caseInsensitive: ["boolean"]
    };
    let validityError = require("../validateType.js")({
        str: str,
        search: search,
        replaceWith: replaceWith,
        count: count,
        caseInsensitive: caseInsensitive
    }, validMap);

    if (validityError) throw new TypeError(validityError.msg);
    
    if (search.length === 0 || search.length === 0 || replaceWith.length === 0) return null;

    /* -------- Validation ends, actual code below -------- */

    try {
        if (count == 0) return str;

        if (caseInsensitive) {
            str = str.toLowerCase();
            search = search.toLowerCase();
        }
        if (count == -1) {
            let arr = str.split(search);
            return arr.join(replaceWith);
        }
        else {
            let rg = new RegExp(search, caseInsensitive ? "gi" : "g"),
            occurs = str.match(rg);
            occurs ? occurs = occurs.length : occurs = 0;

            if (occurs < count) count = occurs;
            let allpart = str.split(search),
            tail = allpart.slice(count).join(search);
            
            let arr = allpart.slice(0, count);
            arr.push(tail);
            return arr.join(replaceWith);
        }
    } catch (e) {
        return null;
    }

}

module.exports = replace;