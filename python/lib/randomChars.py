import math
def main(length, available):
  try:
    import random
    result = ""
    for i in range(length):
      item = available[math.floor(random.random()*len(available))]
      if len(item) == 1:
          result = result + item
      else: return None
    return result
  except: return None
