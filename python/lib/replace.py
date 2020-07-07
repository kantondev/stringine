def main(String, Replace, Replacement, Count = -1):
    try:
        return String.replace(Replace, Replacement, Count)
    except: return None

def replaceCaseInsensitive(String, Replace, Replacement, Count = -1):
    try:
        lowerstr = String.lower().split(Replace.lower())
        str = Replacement.join(lowerstr)
        return str.replace(Replace, Replacement, Count)
    except: return None
