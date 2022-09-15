import imp
import time

def time_to_execute(func):
    def inner(*args):
        print("function runtime: ", end=" ")
        start_time = time.time()
        result= func(*args)
        end_time= time.time()
        print(end_time - start_time)
        # print(result)
        print()
    return inner


@time_to_execute
def sum_many(num):
    sum=0
    for i in range(num):
        sum += i
    return sum

def sum_many_more(num):
    return sum_many(num)

sum1 = sum_many(10000000)
sum2 = sum_many_more(50000000) 