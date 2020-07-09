import os, sys
sys.path.append(os.path.dirname(__file__))

from isValidNumber import main as validNumber

def substringStart(string, search):
    try:
        if string.startswith(search):
            return (string[len(search):])
            
    except:
        return None

def substringEnd(string, search):
    try:
        if string.endswith(search):
            return (string[0:(len(string) - len(search))])
    except:
        return None
