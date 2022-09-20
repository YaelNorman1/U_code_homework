def reduce(func, *args) :
    if len(args) == 0:
        return None
    result = args[0]
    for i in range(1, len(args)):
        result = func(result, args[i])
    return result


# def sum(a,b):
#     return a+b

# arr= [1,2,3,4,5]

print(reduce(lambda x,y: x+y, 1,2,3,4,5))