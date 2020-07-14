/**
 * A high-accuracy tool for verifying the integrity of a given string.
 * 
 * @param {String} str The string to be verified.
 * 
 * @return {null|String} A 192-bit hex checksum representing `str` and its integrity.
 * 
 * Returns `null` or throws a `TypeError` if the arguments are not valid or an error occurs.
 * 
 * Warning: This function is not to be used as a cryptographic function, since it uses a rather simple algorithm. Use a decent cryptography module instead.
 */

var integrity = function (str) {

    // Map of valid types
    let validMap = {
        str: ["string"]
    };
    let validityError = require("../validateType.js")({
        str: str
    }, validMap);

    if (validityError) throw new TypeError(validityError.msg);

    if (str.length === 0) return null;

    /* -- Validation ends, actual code below -- */

    // Padding generator
    function padBits (bits, len) {
        var res = bits;
        for (let padded = 0; padded < len; padded++) res.push(false);
        return res;
    }

    // 192-bit (or any other size) supporting XOR implementation
    function xor (arr1, arr2) {

        if (arr1.length != arr2.length) return null;

        var res = [];
        for (let bitIndex = 0; bitIndex < arr1.length; bitIndex++) {
            let bit1 = arr1[bitIndex];
            let bit2 = arr2[bitIndex];

            if (bit1 == bit2) res.push(false);
            else res.push(true);
        }

        return res;

    }
    // 192-bit (or any other size) supporting signed left-shift implementation
    function lshift (bits, count) {
        let del = bits.splice(0, count);
        for (let index = 0; index < del.length; index++) bits.push(del[index]);
        return bits;
    }
    // 192-bit (or any other size) supporting signed right-shift implementation
    function rshift (bits, count) {
        let del = bits.splice(bits.length - count, count);
        for (let index = 0; index < del.length; index++) bits.unshift(del[index]);
        return bits;
    }

    // Convert string binary representations to true/false binary bit arrays
    function sbtob (paddedBin) {
        var res = [];

        for (let bitIndex = 0; bitIndex < paddedBin.length; bitIndex++) {
            let bit = paddedBin[bitIndex];
            bit == "1" ? res.push(true) : res.push(false);
        }
        
        return res;
    }
    // Convert strings to true/false binary bit arrays
    function stob (str) {
        var res = [];

        for (let charIndex = 0; charIndex < str.length; charIndex++) {
            let bin = str.charCodeAt(charIndex).toString(2).padStart(8, "0");
            let bits = sbtob(bin);
            for (let bit of bits) res.push(bit);
        }

        return res;
    }
    // Convert true/false binary bit arrays to string binary representations
    function btosb (bin) {
        var res = [];

        for (let bitIndex = 0; bitIndex < bin.length; bitIndex++) {
            let bit = bin[bitIndex];
            bit ? res.push("1") : res.push("0");
        }
        
        return res.join("");
    }
    // Convert string binary representations to strings
    function sbtos (bin) {
        var res = [],
        bytes = bin.match(/.{1,4}/g);

        for (let byteIndex = 0; byteIndex < bytes.length; byteIndex++) {
            let byte2 = bytes[byteIndex];
            res.push(parseInt(byte2, 2).toString(16));
        }

        return res.join("");
    }

    try {
        var masterChunk = [],
        masterRes = "";

        // Algorithm options
        var chunkLengthBits = 192,
        chunkLengthBytes = chunkLengthBits / 8,
        spinRounds = 8,
        repeatSum = 4;

        if (str.length < chunkLengthBytes) str += "/".repeat((chunkLengthBytes - str.length));
        
        function spin (round, firstXor, targetStr) {
            var xorLast = firstXor;

            for (let charIndex = 0; true; charIndex++) {
                let currentChars = targetStr.substring(0, chunkLengthBytes);

                if (currentChars.length != chunkLengthBytes) return stopIteration();
                else {

                    masterChunk = stob(currentChars);

                    let lastChunk = xorLast;
                    let xorred = xor(masterChunk, lastChunk);

                    xorLast = xorred;
                    masterChunk = [];
                                    
                    if (charIndex == (str.length - chunkLengthBytes)) return stopIteration();
                        
                    targetStr = targetStr.substring(1);
                }

                function stopIteration () {
                    if (round == spinRounds) {
                        masterRes = sbtos(btosb(xorLast));
                        return;
                    }
                    if (round == (spinRounds - 1)) return spin(round + 1, xorLast, sbtos(btosb(xorLast)));
                    else return spin(round + 1,
                        padBits([], chunkLengthBits),
                        round == 1 ? require("./reverse.js")(str).repeat(repeatSum) : require("./reverse.js")(str));
                }
            }
        }

        let def = [];
        let chars = stob(str.substring(0, 12));
        for (let ind = 0; ind < (chunkLengthBits / 2); ind += 2) {
            def.push(chars[ind]);
            def.push(false);
            def.push(chars[ind + 1]);
            def.push(true);
        }

        spin(1, def, str);
        return masterRes;

    } catch (e) {
        return null;
    }

}

module.exports = integrity;