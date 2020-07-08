// Welcome to Stringine.js, this is the main file in the JavaScript version of the Stringine project.
// This is the core file of all functionality in Stringine and imports the files from “lib”.

// Import all Stringine elements into the LIB object
const LIB = {
    replace: require("./lib/replace.js"),
    substringStart: require("./lib/substringStart.js"),
    substringEnd: require("./lib/substringEnd.js")
};

// Export LIB for use
module.exports = LIB;