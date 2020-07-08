/**
 * This is an internal function used by some features. It “flips” an object by making values keys and vice versa: {key : value} -> {value : key}
 * 
 * @param {Object} obj The object to flip.
 * 
 * @return {Object} The flipped object.
 */
var flipObject = function (obj) {

    for (let key in obj) {
        let value = obj[key];
        obj[value] = key;
        delete obj[key];
    }

    return obj;

}

module.exports = flipObject;