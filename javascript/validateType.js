/**
 * This validator should be used by all functions of Stringine.
 * They should give an object of the arguments and what the valid types for that argument are.
 * 
 * @param {Object} args An object of arguments used. Format: {variable name : variable value}
 * @param {Object} validMap Map of valid types for the argument. Format: {variable name : [array of valid types]}
 */
let validateType = function (args, validMap) {

    for (let i in args) {

        let item = args[i], scan = false;

        for (let t of validMap[i]) {
            if (typeof item == t) scan = true;
            else continue;
        }

        if (!scan) return {
            "invalid": typeof item,
            "arg": i,
            "expect": validMap[i].join(" or ")
        }
        else continue;

    }

    return 0;
    
}

module.exports = validateType;