def main(string, map):
    try:
        in_chars = list(string)
        out_chars = []

        for i in in_chars:
            if i in map:
                out_chars.append(map[i])
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
            if i in map:
                out_chars.append(map[i])
            else:
                out_chars.append(i)
        

        return "".join(out_chars)


    except: return None