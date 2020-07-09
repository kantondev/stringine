// Import the object flip function to be used in translateReverse
import flipObject from "../flipObject";

/**
 * Translates a string (character by character) as instructed by a character map.
 * 
 * Note: Translation is case insensitive: e.g. a and A are translated as the same character (Lowercase).
 * 
 * @param {String} str The string to translate.
 * @param {Object} map The map to instruct translation, with the format {normal character : translated character}.
 * 
 * @return {null|String} The translated version of `str`. If a character is not found from the map or has an invalid length (not 1 character -> 1 character) it is kept intact.
 * 
 * Returns `null` if the arguments are not valid or an error occurs.
 * 
 * If you want to reverse translate without changing your translation map, use `translateReverse` instead. It automatically reverses your map.
 */
var translate = function (str : string, map : any) {
  
    if (str.length === 0 || Object.keys(map).length === 0) return null;

    /* -- Validation ends, actual code below -- */

    try {
        let input : Array<string> = [];
        let output : Array<string> = [];

        input = str.split("");

        for (let i of input) {
            let lower : string = i.toLowerCase();

            if (Object.keys(map).indexOf(lower) !== -1) {
                let mapitem : string = map[lower];
                if (mapitem.length !== 1) return null;
                output.push(mapitem);
            } else {
                output.push(lower);
            }
        }

        return output.join("");
    } catch (e) {
        return null;
    }
    

}

/**
 * Use this for reversing `translate` output without having to make a new map.
 * Translates a string (character by character) as instructed by a character map that is first reversed.
 * 
 * Note: Translation is case insensitive: e.g. a and A are translated as the same character (Lowercase).
 * 
 * @param {String} str The string to translate.
 * @param {Object} map The map to instruct translation, with the format {normal character : translated character}. NOTE: The map is automatically reversed.
 * 
 * @return {String} The translated version of `str`. If a character is not found from the map or has an invalid length (not 1 character -> 1 character) it is kept intact.
 * 
 * Returns `null` or throws a `TypeError` if the arguments are not valid or an error occurs.
 */
var translateReverse = function (str : string, map : any) {

    if (str.length === 0 || Object.keys(map).length === 0) return null;

    /* -- Validation ends, actual code below -- */

    try {
        let input : Array<string> = [];
        let output : Array<string> = [];

        input = str.split("");
        map = flipObject(map);

        for (let i of input) {
            let lower : string = i.toLowerCase();

            if (Object.keys(map).indexOf(lower) !== -1) {
                let mapitem : string = map[lower];
                if (mapitem.length !== 1) return null;
                output.push(mapitem);
            } else {
                output.push(lower);
            }
        }

        return output.join("");
    } catch (e) {
        return null;
    }
    

}

export default { "translate": translate, "translateReverse": translateReverse };