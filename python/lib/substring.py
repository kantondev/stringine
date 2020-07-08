import os, sys
sys.path.append(os.path.dirname(__file__))

from isValidNumber import main as validNumber

def substringStart(string, thing):
    if validNumber(thing):
        try:
            return (string[0:thing]) 
        except:
            return None
    else:
        try:
            if string.startswith(thing):
                return (string[len(thing):])
                
        except:
            return None

def substringEnd(string, thing):
    if validNumber(thing):
        try:
            return (string[-thing:])
        except:
            return None
    else:
        try:
            if string.endswith(thing):
                return (string[0:(len(string) - len(thing))])
        except:
            return None
