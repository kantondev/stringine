def main(string, count = 1, separator = ""):
    try:
        if count > len(string): return None
        index = len(string) - count
        output = string[index:len(string)] + separator + string[0:index]
        return output
    except: return None
