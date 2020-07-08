def substringStart(String, thing):
    if thing.isnumeric():
        try:
            return (String[0:thing]) 
        except:
            return None
    else:
        try:
            if String.startswith(thing):
                return (String[len(thing):])
                
        except:
            return None

def substringEnd(String, thing):
    if thing.isnumeric():
        try:
            return (String[-thing:])
        except:
            return None
    else:
        try:
            if String.endswith(thing):
                return (String[0:(len(String) - len(thing))])    
        except:
            return None
