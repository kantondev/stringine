// Import the reverse function to be used in lowercaseEnd
import reverse from "./reverse";

/**
 * Converts the specified amount of characters from the start of the provided string to lowercase.
 * 
 * @param {String} str The string to be converted.
 * @param {Number} [count=1] How many characters should be converted (1 is only the first character, etc...). Defaults to 1.
 * 
 * @return {null|String} The modified string (or unmodified, in case the characters were already lowercase, `count` was 0, etc).
 * 
 * Returns `null` if the arguments are not valid or an error occurs.
 */

var lowercaseStart = function (str : string, count : number = 1) : string|null {

    if (str.length === 0) return null;
    if (count < 0) return null;

    /* -- Validation ends, actual code below -- */

    try {
        if (count == 0) return str;

        let char_str : string, output_str : string;

        let intact : string = str.substring(count, str.length);
        char_str = str.substring(0, count);

        output_str = char_str.toLowerCase();
        

        return output_str + intact;
    } catch (e) {
        return null;
    }

}


/**
 * Converts the specified amount of characters from the end of the provided string to lowercase.
 * 
 * @param {String} str The string to be converted.
 * @param {Number} [count=1] How many characters should be converted (1 is only the first character, etc...). Defaults to 1.
 * 
 * @return {null|String} The modified string (or unmodified, in case the characters were already lowercase, `count` was 0, etc).
 * 
 * Returns `null` if the arguments are not valid or an error occurs.
 */

var lowercaseEnd = function (str : string, count : number = 1) : string|null {

    if (str.length === 0) return null;
    if (count < 0) return null;

    /* -- Validation ends, actual code below -- */

    try {
        if (count == 0) return str;

        let char_str : string, output_str : string;

        str = reverse(str);

        let intact : string = str.substring(count, str.length);
        char_str = str.substring(0, count);

        output_str = char_str.toLowerCase();
        
        return reverse(output_str + intact);
    } catch (e) {
        return null;
    }

}

export default { "lowercaseStart": lowercaseStart, "lowercaseEnd": lowercaseEnd }