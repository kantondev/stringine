// Welcome to Stringine.js, this is the main file in the JavaScript version of the Stringine project.
// This is the core file of all functionality in Stringine and imports the files from “lib”.

// Import all Stringine elements
import reverse from "./lib/reverse";
import replace from "./lib/replace";
import isValidNumber from "./lib/isValidNumber";
import randomChars from "./lib/randomChars";
import sub from "./lib/substring";
import translate from "./lib/translate";
import lowercase from "./lib/lowercase";
import uppercase from "./lib/uppercase";
import rotate from "./lib/rotate";
import integrity from "./lib/integrity";

import maps from "./lib/map";

// Add Stringine elements to the export “stringine”.
const stringine = {
    reverse: reverse,
    replace: replace,
    isValidNumber: isValidNumber,
    randomChars: randomChars,
    substringStart: sub.substringStart,
    substringEnd: sub.substringEnd,
    translate: translate.translate,
    translateReverse: translate.translateReverse,
    lowercaseStart: lowercase.lowercaseStart,
    lowercaseEnd: lowercase.lowercaseEnd,
    uppercaseStart: uppercase.uppercaseStart,
    uppercaseEnd: uppercase.uppercaseEnd,
    rotate: rotate,
    integrity: integrity,


    translateMap: maps.translateMap,
    charMap: maps.charMap,
}

// Export stringine for use
export default stringine;