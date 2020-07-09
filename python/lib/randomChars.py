def main(length, available):
  import random
  result = ""
  for i in range(length):
    item = available[random.randint(0,length-1)]
    if len(item) == 1:
        result = result + item
    else: return None
  return result