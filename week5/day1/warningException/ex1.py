# division in 0, no input
# import math

# dividend = float(input("Enter the dividend: "))
# divisor = float(input("Enter the divisor: "))
# quotient = dividend/divisor
# print(math.floor(quotient)) 


# ex2
def get_list_element(my_list, index):
    try:
        print(my_list[index]) 
    except IndexError:
        print("Caught ValueError exception:", IndexError.args)

# ex3
try:
    age = int(input("How old are you? "))
except ValueError:
    print("should insert a number") 

# ex4
def divide(x, y):
    try:
        print(f'{x}/{y} is {x / y}')  
    except ValueError as e:
        print(e)  
    except TypeError as e:
        print(e)  
    except ZeroDivisionError as e:
        print(e)  
divide(1,"2")