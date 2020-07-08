/**
 * This validator should be used by all functions of Stringine.
 * They should give an object of the arguments and what the valid types for that argument are.
 * 
 * @param {Object} args An object of arguments used. Format: {variable name : variable value}
 * @param {Object} validMap Map of valid types for the argument. Format: {variable name : [array of valid types]}
 */
var validateType = function (args, validMap) {

    for (let i in args) {

        let item = args[i];

        for (let t of validMap[i]) {
            if (typeof item == t) return {
                "msg": `Invalid type '${typeof item}' provided for argument '${i}', ${validMap[i].join(" or ")} expected`,
            }
            else continue;
        }

    }

    return 0;
    
}

module.exports = validateType;