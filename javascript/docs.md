# Stringine for JavaScript/TypeScript
Read more about Stringine as a project [here](https://github.com/kantondev/stringine#readme).

* This documentation applies to both JavaScript and TypeScript libraries available of Stringine, but is documented mainly as JavaScript.

* Refer to the JSDoc texts of the element if you need more detailed, language-specific information!

## How to use


### Installing Stringine

You can install Stringine for node.js from [npm](https://www.npmjs.com/package/stringine). If you want to use Stringine for other purposes, clone the GitHub repository.

If you prefer using Stringine as a TypeScript library, clone the GitHub repository since we only have JavaScript files on npm.

If you have installed the npm package, use `require("stringine")` to import the package into your code.
Example:
```javascript
const stringine = require("stringine");

// Outputs a character map of all A-Z characters.
console.log(stringine.charMap.az);
```

### Functions

We use JSDoc in our JavaScript library. You can get more detailed info of the arguments needed from the JSDoc documentation of each function.

`isValidNumber(str)` -- Validates the provided string for number validity. Decimals and negative numbers are allowed.

Example:
```javascript
console.log(stringine.isValidNumber("26"));
// true
```


`lowercaseStart(str, count)` -- Converts the specified amount of characters from the start of the provided string to lowercase.

Example:
```javascript
console.log(stringine.lowercaseStart("FOOBAR", 3));
// fooBAR
```

`lowercaseEnd(str, count)` -- Converts the specified amount of characters from the end of the provided string to lowercase.


`uppercaseStart(str, count)` -- Converts the specified amount of characters from the start of the provided string to uppercase.

Example:
```javascript
console.log(stringine.uppercaseStart("foObAr", 2));
// FOObAr
```

`uppercaseEnd(str, count)` -- Converts the specified amount of characters from the end of the provided string to uppercase.


`randomChars(length, charMap)` -- Generates a sequence of random characters, as instructed by the character map.

You can get built-in character maps from the `charMap` object (explained further in the Other resources section).

Example:
```javascript
console.log(stringine.randomChars(8, stringine.charMap.az_numbers));
// (for example): 92obj0sk
```


`replace(str, search, replaceWith, count?, caseInsensitive?)` -- Replaces all (or the specified amount of) occurrences of a string with another.

`count` -- optional (defaults to `1`). You can use this argument to make Stringine only replace a certain amount of occurrences (from the start of the string).

`caseInsensitive` -- optional (defaults to `false`). You can use this argument to make the `search` argument ignore case.

Example:
```javascript
var test_string = "I like eating spicy foods."
console.log(stringine.replace(test_string, "spicy", "sweet"));
// I like eating sweet foods.
```


`reverse(str)` -- This function provides a simplification for reversing a string.

Example:
```javascript
var test_string = "I like eating spicy foods."
console.log(stringine.reverse(test_string));
// .sdoof ycips gnitae ekil I
```


`substringStart(str, search)` -- Cuts from the start of a string by cutting the specified string off.

Example:
```javascript
var myString = "foo bar baz"
console.log(stringine.substringStart(myString, "foo "));
// bar baz
```


`substringEnd(str, search)` -- Cuts from the end of a string by cutting the specified string off.

Example:
```javascript
var myString = "foo bar baz"
console.log(stringine.substringStart(myString, " baz"));
// foo bar
```


`translate(str, map)` -- Translates a string (character by character) as instructed by a character map.

You can get built-in translation maps from the `transateMap` object (explained further in the Other resources section).

Note: Translation is case insensitive: e.g. a and A are translated as the same character (Lowercase).

Example:
```javascript
var myString = "Hello World!"
console.log(stringine.translate(myString, stringine.translateMap.default));
// £%¤¤~ ]~<¤/!
```


`translateReverse(str, map)` -- Translates a string (character by character) as instructed by a character map that is first reversed.

Use this for reversing `translate` output without having to make a new map.

Example:
```javascript
var myString = "£%¤¤~ ]~<¤/!"
console.log(stringine.translate(myString, stringine.translateMap.default));
// Hello World!
```


### Other resources

#### `charMap`

A resource for built-in character maps. Note: All of these are in lowercase.

`charMap.az` -- An array of A-Z characters.

`charMap.az_numbers` -- An array of A-Z characters + numbers (0-9).

`charMap.numbers` -- An array of numbers (0-9).

`charMap.numbers_hex` -- An array of hex numbers (0-f).

#### `translateMap`

A resource for built-in translation maps.

`translateMap.default` -- The default translation map which covers A-Z + 0-9. Only uses characters found from a basic keyboard.

`charMap.extended` -- An extended translation map which covers A-Z + 0-9 + ,.!? + space. Uses an extended set of Unicode characters.

`charMap.dots` -- A translation map which covers A-Z + 0-9 + ,.!? + space. Only uses braille patterns (hence the name "dots").