cache_dict = {}

def cache_fibonacci(func):
    def inner(*args):
        if args[0] not in cache_dict:
            print("claculating: " + str(args[0]))
            result= func(args[0])
            cache_dict.update({args[0]: result})
            return result
        else:
            return cache_dict.get(args[0])
    return inner   


@cache_fibonacci
def fibonacci(num):
    if num < 2:
        return num
    else:
        return fibonacci(num-1) + fibonacci(num-2)


fibonacci(2)
fibonacci(4)