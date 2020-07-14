// Import the reverse function to be used in the spinner
import reverse from "./reverse";

/**
 * A high-accuracy tool for verifying the integrity of a given string.
 * 
 * @param {String} str The string to be verified.
 * 
 * @return {null|String} A 192-bit hex checksum representing `str` and its integrity.
 * 
 * Returns `null` if the arguments are not valid or an error occurs.
 * 
 * Warning: This function is not to be used as a cryptographic function, since it uses a rather simple algorithm. Use a decent cryptography module instead.
 */

var integrity = function (str : string) : string|null {

    if (str.length === 0) return null;

    /* -- Validation ends, actual code below -- */

    // Padding generator
    function padBits (bits : Array<boolean>, len : number) : Array<boolean> {
        var res : Array<boolean> = bits;
        for (let padded = 0; padded < len; padded++) res.push(false);
        return res;
    }

    // 192-bit (or any other size) supporting XOR implementation
    function xor (arr1 : Array<boolean>, arr2 : Array<boolean>) : Array<boolean> {

        if (arr1.length != arr2.length) return null;

        var res : Array<boolean> = [];
        for (let bitIndex : number = 0; bitIndex < arr1.length; bitIndex++) {
            let bit1 : boolean = arr1[bitIndex];
            let bit2 : boolean = arr2[bitIndex];

            if (bit1 == bit2) res.push(false);
            else res.push(true);
        }

        return res;

    }
    // 192-bit (or any other size) supporting signed left-shift implementation
    function lshift (bits : Array<boolean>, count : number) : Array<boolean> {
        let del = bits.splice(0, count);
        for (let index = 0; index < del.length; index++) bits.push(del[index]);
        return bits;
    }
    // 192-bit (or any other size) supporting signed right-shift implementation
    function rshift (bits : Array<boolean>, count : number) : Array<boolean> {
        let del = bits.splice(bits.length - count, count);
        for (let index = 0; index < del.length; index++) bits.unshift(del[index]);
        return bits;
    }

    // Convert string binary representations to true/false binary bit arrays
    function sbtob (paddedBin : string) : Array<boolean> {
        var res : Array<boolean> = [];

        for (let bitIndex : number = 0; bitIndex < paddedBin.length; bitIndex++) {
            let bit : string = paddedBin[bitIndex];
            bit == "1" ? res.push(true) : res.push(false);
        }
        
        return res;
    }
    // Convert strings to true/false binary bit arrays
    function stob (str : string) : Array<boolean> {
        var res : Array<boolean> = [];
        for (let charIndex : number = 0; charIndex < str.length; charIndex++) {
            let bin : string = str.charCodeAt(charIndex).toString(2);
            bin = bin.padStart(8, "0");
            for (let bit of sbtob(bin)) res.push(bit);
        }
        return res;
    }
    // Convert true/false binary bit arrays to string binary representations
    function btosb (bin : Array<boolean>) : string {
        var res : Array<string> = [];

        for (let bitIndex : number = 0; bitIndex < bin.length; bitIndex++) {
            let bit : boolean = bin[bitIndex];
            bit ? res.push("1") : res.push("0");
        }
        
        return res.join("");
    }
    // Convert string binary representations to strings
    function sbtos (bin : string) : string {
        var res : Array<string> = [],
        bytes : Array<string> = bin.match(/.{1,4}/g);

        for (let byteIndex : number = 0; byteIndex < bytes.length; byteIndex++) {
            let byte2 = bytes[byteIndex],
            byte16 = parseInt(byte2, 2).toString(16);
            res.push(byte16);
        }

        return res.join("");
    }

    try {
        var masterChunk : Array<boolean> = [],
        masterRes : string = "";

        // Algorithm options
        var chunkLengthBits : number = 192,
        chunkLengthBytes : number = chunkLengthBits / 8,
        spinRounds : number = 8,
        repeatSum : number = 4;
        
        if (str.length < chunkLengthBytes) str += "/".repeat((chunkLengthBytes - str.length));

        function spin (round : number, firstXor : Array<boolean>, targetStr : string) : void {
            var xorLast : Array<boolean> = firstXor;

            for (let charIndex : number = 0; true; charIndex++) {
                let currentChars : string = targetStr.substring(0, chunkLengthBytes);


                if (currentChars.length != chunkLengthBytes) {
                    return stopIteration();
                } else {

                    masterChunk = stob(currentChars);

                    let lastChunk : Array<boolean> = xorLast;
                    let xorred : Array<boolean> = xor(masterChunk, lastChunk);

                    xorLast = xorred;
                    masterChunk = [];
                                    
                    if (charIndex == (str.length - chunkLengthBytes)) return stopIteration();
                        
                    targetStr = targetStr.substring(1);
                }

                function stopIteration () : void {
                    let xorReference : Array<boolean> = xorLast;
                    if (round == spinRounds) {
                        masterRes = sbtos(btosb(xorReference));
                        return;
                    }
                    if (round == (spinRounds - 1)) return spin(round + 1, xorLast, sbtos(btosb(xorReference)));
                    else return spin(round + 1, padBits([], chunkLengthBits), reverse(targetStr).repeat(repeatSum) + targetStr);
                }
            }
        }

        let defaultArr : Array<boolean> = [];
        let chars : Array<boolean> = stob(str.substring(0, 12));
        for (let i : number = 0; i < (chunkLengthBits / 2); i += 2) {
            defaultArr.push(chars[i]);
            defaultArr.push(false);
            defaultArr.push(chars[i + 1]);
            defaultArr.push(true);
        }

        spin(1, defaultArr, str);
        return masterRes;

    } catch (e) {
        return null;
    }

}

export default integrity;