# Stringine documentation
Read more about Stringine as a project [here](https://github.com/kantondev/stringine#readme).

* This documentation is supposed to apply to Stringine in all languages it supports, but the documentation examples and sources are as JavaScript.

* This means the documentation is always accurate for the JavaScript version of Stringine, but is not necessarily accurate for other languages! If you followed this documentation but experienced issues with another language, let us know.

* Refer to the JSDoc/comments/other information of the element if you need more detailed, language-specific information!

## How to use


### Installing Stringine

You can install Stringine from:
* node.js: [npm](https://www.npmjs.com/package/stringine)
* Python: [PyPI](https://pypi.org/project/stringine/)

If your preferred source/language is not listed, download the files from our GitHub repository.

If you have installed the npm package, use `require("stringine")` to import the package into your code.
Example:
```javascript
const stringine = require("stringine");
```

For Python:
```python
import stringine
```

### Stringine functions

#### `integrity(str)`

A high-accuracy tool for verifying the integrity of a given string.

The result, a hexadecimal checksum, is always 192 bits (48 ASCII hex characters) long.

Warning: This function is not to be used as a cryptographic function, since it uses a rather simple algorithm. We recommend you use a decent cryptography module instead.

Example:
```javascript
var verify_string = "Let's make sure this string has not changed!";
console.log(stringine.integrity(verify_string));
// 1a1e5a185955081b5741150d4715020f561f0c4703064279
```

Now, note how the word *this* got changed to *that*:
```javascript
var verify_string = "Let's make sure that string has not changed!";
console.log(stringine.integrity(verify_string));
// 12400412545f021e5210410f111552090640031c5704167b
```

The checksum is different.

Note: If the change is very small (max. 2 characters) and very close to the start/end of the string, the checksum might be similar.


#### `isValidNumber(str)`

Validates the provided string for number validity. Decimals and negative numbers are allowed.

Example:
```javascript
console.log(stringine.isValidNumber("26"));
// true
```


#### `lowercaseStart(str, count?)`

Converts the specified amount of characters from the start of the provided string to lowercase.

Argument `count` -- optional (defaults to `1`).

Example:
```javascript
console.log(stringine.lowercaseStart("FOOBAR", 3));
// fooBAR
```

#### `lowercaseEnd(str, count?)`

Converts the specified amount of characters from the end of the provided string to lowercase.


#### `uppercaseStart(str, count?)`

Converts the specified amount of characters from the start of the provided string to uppercase.

Argument `count` -- optional (defaults to `1`).

Example:
```javascript
console.log(stringine.uppercaseStart("foObAr", 2));
// FOObAr
```

#### `uppercaseEnd(str, count?)`

Converts the specified amount of characters from the end of the provided string to uppercase.


#### `randomChars(length, charMap)`

Generates a sequence of random characters, as instructed by the character map (which is an array).

You can get built-in character maps from the `charMap` object (explained further in the Other resources section).

Example:
```javascript
console.log(stringine.randomChars(8, stringine.charMap.az_numbers));
// (for example): 92obj0sk
```

Example with a custom character map:
```javascript
console.log(stringine.randomChars(4, ["a", "b", "8", "f", "/"]));
// (for example): 8b/a
```


#### `replace(str, search, replaceWith, count?, caseInsensitive?)`

Replaces all (or the specified amount of) occurrences of a string with another.

Argument `count` -- optional (defaults to `1`). You can use this argument to make Stringine only replace a certain amount of occurrences (from the start of the string).

`caseInsensitive` -- optional (defaults to `false`). You can use this argument to make the `search` argument ignore case.

Example:
```javascript
var test_string = "I like eating spicy foods.";
console.log(stringine.replace(test_string, "spicy", "sweet"));
// I like eating sweet foods.
```


#### `reverse(str)`

This function provides a simplification for reversing a string.

Example:
```javascript
var test_string = "I like eating spicy foods.";
console.log(stringine.reverse(test_string));
// .sdoof ycips gnitae ekil I
```


#### `rotate(str, count?, separator?)`

Rotates the string (moves the specified amount of characters from the end of the string to the start).

Argument `count` -- optional (defaults to `1`). How many characters should be moved.

Argument `separator` -- optional (defaults to empty). A string that should separate the moved characters and the original characters.

Example:
```javascript
var rotateThis = "123456";
console.log(stringine.rotate(rotateThis, 2));
// 561234
```

Example with separator:
```javascript
var rotateThis = "123456";
console.log(stringine.rotate(rotateThis, 2, "-"));
// 56-1234
```


#### `substringStart(str, search)`

Cuts from the start of a string by cutting the specified string off.

Example:
```javascript
var myString = "foo bar baz";
console.log(stringine.substringStart(myString, "foo "));
// bar baz
```


#### `substringEnd(str, search)`

Cuts from the end of a string by cutting the specified string off.

Example:
```javascript
var myString = "foo bar baz";
console.log(stringine.substringEnd(myString, " baz"));
// foo bar
```


#### `translate(str, map)`

Translates a string (character by character) as instructed by a translation map (which is an object).

You can get built-in translation maps from the `translateMap` object (explained further in the Other resources section).

Note: Translation is case insensitive: e.g. a and A are translated as the same character (Lowercase).

Example:
```javascript
var myString = "Hello World!";
console.log(stringine.translate(myString, stringine.translateMap.default));
// £%¤¤~ ]~<¤/!
```


#### `translateReverse(str, map)`

Translates a string (character by character) as instructed by a translation map that is first reversed.

Use this for reversing `translate` output without having to make a new map.

Example:
```javascript
var myString = "£%¤¤~ ]~<¤/!";
console.log(stringine.translateReverse(myString, stringine.translateMap.default));
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