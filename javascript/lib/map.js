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
        },
        "extended": {
            "a": "椉",
            "b": "𵌈",
            "c": "Ƶ",
            "d": "ܣ",
            "e": "㤀",
            "f": "ڳ",
            "g": "蘑",
            "h": "˽",
            "i": "眓",
            "j": "ɛ",
            "k": "짙",
            "l": "㯫",
            "m": "д",
            "n": "ˉ",
            "o": "刯",
            "p": "Ӟ",
            "q": "墜",
            "r": "믋",
            "s": "ǿ",
            "t": "ܢ",
            "u": "կ",
            "v": "ҹ",
            "w": "螮",
            "x": "붖",
            "y": "匓",
            "z": "ގ",
            "!": "蒁",
            "?": "⠰",
            ".": "⠦",
            ",": "⡓",
            " ": "⡢",
            "1": "⢆",
            "2": "⢒",
            "3": "⢣",
            "4": "⢱",
            "5": "⣂",
            "6": "⢰",
            "7": "⢠",
            "8": "⢐",
            "9": "⣳"
        }
    }

}

module.exports = maps;