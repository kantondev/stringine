def substringStart(String, Number):
    try:
        return (String[0:Number])
    except:
        return None
def substringEnd(String, Number):
    try:
        return (String[(Number +1):])
    except:
        return None