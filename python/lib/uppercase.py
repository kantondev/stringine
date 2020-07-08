def uppercaseStart(string, number):

    import os, sys
    sys.path.append(os.path.dirname(__file__))

    from substring import substringStart
    from replace import main

    String2 = substringStart(string, number)
    String = main(string, String2, String2.upper())
    return String
    
def uppercaseEnd(string, number):
    String = string[::-1]
    import os, sys
    sys.path.append(os.path.dirname(__file__))

    from substring import substringStart
    from replace import main

    String2 = substringStart(String, number)
    String = main(String, String2, String2.upper())
    return String[::-1]