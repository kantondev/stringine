// Welcome to Stringine.js, this is the main file in the JavaScript version of the Stringine project.
// This is the core file of all functionality in Stringine and imports the files from “lib”.

// Import all Stringine elements into the LIB object
const LIB = {
    replace: require("./lib/replace.js"),
    substringStart: require("./lib/substringStart.js"),
    substringEnd: require("./lib/substringEnd.js"),
    reverse: require("./lib/reverse.js"),
    translate: require("./lib/translate.js"),
    translateReverse: require("./lib/translateReverse.js"),
    uppercaseStart: require("./lib/uppercaseStart.js"),
    uppercaseEnd: require("./lib/uppercaseEnd.js"),
    lowercaseStart: require("./lib/uppercaseStart.js"),
    lowercaseEnd: require("./lib/lowercaseEnd.js"),
    isValidNumber: require("./lib/isValidNumber.js"),
    randomChars: require("./lib/randomChars.js"),
    rotate: require("./lib/rotate.js"),

    translateMap: require("./lib/map.js").translate,
    charMap: require("./lib/map.js").char,
};

// Export LIB for use
module.exports = LIB;