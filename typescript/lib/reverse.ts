/**
 * This function provides a (minor) simplification for reversing a string.
 * 
 * @param {String} str The string to be reversed.
 * 
 * @return {null|String} A reversed version of `str`.
 * 
 * Returns `null` if the arguments are not valid or an error occurs.
 */
var reverse = function (str : string) {
    
    if (str.length === 0) return null;

    /* -- Validation ends, actual code below -- */

    try {
        let char_arr : Array<string> = str.split("").reverse(),
        char_string : string = char_arr.join("");
        
        return char_string;
    } catch (e) {
        return null;
    }
    
    
}

export default reverse;