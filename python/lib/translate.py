# Note: Translation is case insensitive: e.g. a and A are translated as the same character (Lowercase).

def main(string, map):
    try:
        in_chars = list(string)
        out_chars = []

        for i in in_chars:
            if i.lower() in map:
                out_chars.append(map[i.lower()].lower())
            else:
                out_chars.append(i)

        return "".join(out_chars)

    except: return None

def reverse(string, originalMap):
    try:

        map = {}
        
        for key in originalMap:
            value = originalMap[key]
            map[value] = key

        in_chars = list(string)
        out_chars = []


        for i in in_chars:
            if i.lower() in map:
                out_chars.append(map[i.lower()].lower())
            else:
                out_chars.append(i)
        

        return "".join(out_chars)


    except: return None