def print_args(func):
  def inner(*args, **kwargs):
    print("args: ", end=" ")
    for x in args:
      print(x, end=" ")
    print()
    return func(*args, **kwargs)
  return inner
    
@print_args
def add2(x, y):
  return x+y

add2(1,2) 
print(add2(1,2)) 