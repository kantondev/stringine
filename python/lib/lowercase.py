def lowercaseStart(string, number):

    import os, sys
    sys.path.append(os.path.dirname(__file__))

    from substring import substringStart
    from replace import main

    string2 = substringStart(string, number)
    string = main(string, string2, string2.lower())
    return string

def lowercaseEnd(string, number):
    String = string[::-1]
    import os, sys
    sys.path.append(os.path.dirname(__file__))

    from substring import substringStart
    from replace import main

    String2 = substringStart(String, number)
    String = main(String, String2, String2.lower())
    return String[::-1]