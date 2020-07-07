/**
 * Replaces all occurrences of a string with another.
 * 
 * @param {String} str The string to search `search` strings from.
 * @param {String} search The string to search for.
 * @param {String} replaceWith The string to replace all `search` occurrences from within.
 * @param {Number} [count=-1] The maximum amount of occurrences to be replaced. `-1` means no limit making it the default value.
 * @param {Boolean} [caseInsensitive=false] Whether the search should be case insensitive. Defaults to `false`.
 * 
 * @return {TypeError|null|String} The modified (or unmodified, in case of no matches) string.
 * 
 * Returns `null` or `TypeError` if the arguments are not valid or an error occurs.
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
    let valid = require("../validateType")({
        str: str,
        search: search,
        replaceWith: replaceWith,
        count: count,
        caseInsensitive: caseInsensitive
    }, validMap);

    if (valid) return new TypeError(`Invalid type '${valid.invalid}' provided for '${valid.arg}', ${valid.expect} expected`);
    

    if (typeof str || search || replaceWith != "string") return new TypeError("Invalid type provided, 'string' expected");
    if (typeof count != "number") return new TypeError("Invalid type provided, 'number' expected");
    if (typeof caseInsensitive != "boolean") return new TypeError("Invalid type provided, 'boolean' expected");
    if (str || search || replaceWith.length === 0) return null;

    try {
        if (count == 0) return str;

        if (caseInsensitive) {
            str = str.toLowerCase();
            search = search.toLowerCase();
        }
        if (count == -1) {
            arr = str.split(search);
            return arr.join(replaceWith);
        }
        else {
            arr = [str.split(search, 1).join(""), string.split(search).slice(count).join(search)];
        }
        return arr.join(replaceWith);
    } catch (e) {
        return null;
    }

}

module.exports = replace;