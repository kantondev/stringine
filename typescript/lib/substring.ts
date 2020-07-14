// Import reverse function to be used in substringEnd
import stringineReverse from "./reverse";

/**
 * Cuts from the start of a string by cutting the specified string off. For example, `substringStart("asdf foobar", "as")` will return `df foobar`.
 * 
 * @param {String} str The string to cut.
 * @param {String} search The string to look for from the start of the string.
 * 
 * @return {null|String} The modified `str` (or unmodified, in case `search` was a string that does not exist).
 * 
 * Returns `null` if the arguments are not valid or an error occurs.
 */
var substringStart = function (str : string, search : string) : string|null {
    
    if (str.length === 0) return null;

    let checkSearch : number = search.length;

    /* -- Validation ends, actual code below -- */

    try {
        if (checkSearch === 0) return str;

        if (!str.startsWith(search)) return str;
        let arr : Array<string> = [str.split(search, 1).join(""), str.split(search).slice(1).join(search)];
        return arr.join("");
        
    } catch (e) {
        return null;
    }

}

/**
 * Cuts from the end of a string by cutting the specified string off. For example, `substringEnd("asdf foobar", "ar")` will return `asdf foob`.
 * 
 * @param {String} str The string to cut.
 * @param {String} search The string to look for from the end of the string.
 * 
 * @return {null|String} The modified `str` (or unmodified, in case `search` was a string that does not exist).
 * 
 * Returns `null` if the arguments are not valid or an error occurs.
 */
var substringEnd = function (str : string, search : string) : string|null {

    if (str.length === 0) return null;


    let checkSearch : number = search.length;
    
    /* -- Validation ends, actual code below -- */

    try {
        if (checkSearch === 0) return str;

        if (!str.endsWith(search)) return str;

        search = stringineReverse(search);
        str = stringineReverse(str);
        let arr : Array<string> = [str.split(search, 1).join(""), str.split(search).slice(1).join(search)];

        return stringineReverse(arr.join(""));
        
    } catch (e) {
        return null;
    }

}

export default { "substringStart": substringStart, "substringEnd": substringEnd };