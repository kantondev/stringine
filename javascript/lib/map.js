/**
 * Here are maps for the translation & random character functions to help developers save time.
 * 
 * For example, if you want to generate a sequence of random numbers you can use stringine.charMap.numbers as the map.
 */
var maps = {

    char: {

        "az": ['a','b','c','d','e','f','g','h',
        'i','j','k','l','m','n', 'o','p','q','r',
        's','t','u','v','w','x','y','z'],
      
        "az_numbers": ['0','1','2','3','4','5','6','7','8','9',
        'a','b','c','d','e','f','g','h',
        'i','j','k','l','m','n', 'o','p','q','r',
        's','t','u','v','w','x','y','z'],
      
        "numbers": ['0','1','2','3','4','5','6','7','8','9'],

        "numbers_hex": ['0','1','2','3','4','5','6','7','8','9',
        'a','b','c','d','e','f']
      
    },

    translate: {
        "default": {
            "a": "#",
            "b": "&",
            "c": "=",
            "d": "/",
            "e": "%",
            "f": "}",
            "g": "€",
            "h": "£",
            "i": "_",
            "j": "{",
            "k": "^",
            "l": "¤",
            "m": "$",
            "n": "+",
            "o": "~",
            "p": ".",
            "q": ",",
            "r": "<",
            "s": ">",
            "t": "`",
            "u": "´",
            "v": "[",
            "w": "]",
            "x": "§",
            "y": "½",
            "z": ";"
        }
    }

}

module.exports = maps;