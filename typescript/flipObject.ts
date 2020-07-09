/**
 * This is an internal function used by some features. It “flips” an object by making values keys and vice versa: {key : value} -> {value : key}
 * 
 * @param {Object} obj The object to flip.
 * 
 * @return {Object} The flipped object.
 */
var flipObject = function (obj : any) {

    let newobj : any = {};

    for (let key in obj) {
        let value : any = obj[key];
        newobj[value] = key;
    }

    return newobj;

}

export default flipObject;