/**
 * Generates a sequence of random characters, as instructed by the character map.
 * 
 * @param {Number} length The length of the sequence to be generated.
 * @param {Array} charMap An array of all characters allowed to include in the sequence.
 * 
 * @return {null|String} The generated string.
 * 
 * Returns `null` if the arguments are not valid or an error occurs.
 */

var randomChars = function (length : number, charMap : Array<string>) {

    if (length === 0) return null;

    /* -- Validation ends, actual code below -- */

    try {
        if (charMap.length === 0) return "";

        let output_str : string = "";

        for (let i = 0; i < length; i++) {
            let index : number = Math.floor(Math.random()*charMap.length),
            item : string = charMap[index];

            if (item.length != 1) return null;
            else output_str += item;
        }
        
        return output_str;
    } catch (e) {
        return null;
    }

}

export default randomChars;