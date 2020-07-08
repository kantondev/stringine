def main(string, replace, replacement, count = -1):
    try:
        return string.replace(replace, replacement, count)
    except: return None

def replaceCaseInsensitive(string, replace, replacement, count = -1):
    try:
        lowerstr = string.lower().split(replace.lower())
        string = replacement.join(lowerstr)
        return string.replace(replace, replacement, count)
    except: return None
