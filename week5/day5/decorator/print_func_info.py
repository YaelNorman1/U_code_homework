from functools import wraps
import time

def print_info(func):
    @wraps(func)
    def inner(*args, **kwargs):
        print("func name: "+ func.__name__, end= " ")
        print()
        print_args(*args)
        print_kwargs(**kwargs)
        result= func(*args, **kwargs)
        time.sleep(1)
        print("return value: " + str(result))
        print("return type: " + str(type(result)), end=" ")
    return inner

def print_args(*args):
    print("args: ", end=" ")
    print(args)
  

def print_kwargs(**kwargs):
    print("kwargs: ", end=" ")
    print(kwargs)


@print_info
def add(num1, num2, age, text):
    return num1+num2

add(1, 2, age=3, text="hello") 