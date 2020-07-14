import os, sys, re, traceback
sys.path.append(os.path.dirname(__file__))

from reverse import reverse as reverse

def main(string):
    def padBits(bits, length):
        res = bits
        for i in range(length):
            res.append(False)
        return res

    def xor(arr1, arr2):
        if len(arr1) is not len(arr2): return None
        res = []
        for bitIndex in range((len(arr1))):
            bit1 = arr1[bitIndex]
            bit2 = arr2[bitIndex]
            if bit1 is bit2: res.append(False)
            else: res.append(True)
        
        return res

    def sbtob(bins):
        res = []
        for bitIndex in range(len(bins)):
            b = bins[bitIndex]
            if b is "1":
                res.append(True)
            else:
                res.append(False)
        return res
    

    def stob(string):
        res = []
        for charIndex in range(len(string)):
            bins = format(ord(string[charIndex]), "08b")
            bits = sbtob(bins)
            for b in bits: res.append(b)
        return res

    def btosb(bins):
        res = []
        for bitIndex in range((len(bins))):
            b = bins[bitIndex]
            if b:
                res.append("1")
            else:
                res.append("0")
  
        return "".join(res)
    
    def sbtos(bins):
        res = []
        bt = [bins[i:i + 4] for i in range(0, len(bins), 4)]

        for byteIndex in range(len(bt)):
            bt2 = bt[byteIndex]
            bt2 = format(int(bt2, 2), "04b")
            res.append(format(int(bt2, 2), "01x"))
        
        return "".join(res)

    try:
        master_chunk = []

        # Options
        chunkLengthBits = 192
        chunkLengthBytes = chunkLengthBits // 8
        spins = 8
        repeat_count = 4

        if len(string) < chunkLengthBytes:
            string += "/" * (chunkLengthBytes - len(string))
        
        def spin(rnd, first, target):
            xor_last = first
            char_index = 0

            def stopIteration():
                if rnd is spins:
                    return sbtos(btosb(xor_last))
                if (rnd is (spins - 1)):
                    return spin(rnd + 1, xor_last, sbtos(btosb(xor_last)))
                else:
                    next_target = reverse(string)
                    if rnd == 1:
                        next_target = next_target * repeat_count
                    return spin(rnd + 1, padBits([], chunkLengthBits), next_target)

            while True:
                current_chars = target[0:chunkLengthBytes]

                if len(current_chars) is not chunkLengthBytes:
                    return stopIteration()
                else:
                    master_chunk = stob(current_chars)

                    xorred = xor(master_chunk, xor_last)

                    xor_last = xorred
                    master_chunk = []
                                    
                    if char_index is (len(string) - chunkLengthBytes):
                        return stopIteration()
        
                    target = target[1:]
                
                char_index += 1
                        

        default = []
        chars = stob(string[0:12])
        ind = 0
        for i in range((chunkLengthBits // 2) + 1):
            default.append(chars[ind])
            default.append(False)

            if ind is len(chars) - 1:
                break
            ind += 1

            default.append(chars[ind])
            default.append(True)

            if ind is len(chars) - 1:
                break
            ind += 1
        
        return spin(1, default, string)

    except: return None
    