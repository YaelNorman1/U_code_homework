def my_enumerate(iterable, start=0):
    counter = start 
    enumerate_result =[]
    for element in iterable:
        enumerate_result.append((counter, element))
        counter += 1
    return enumerate_result

# print(my_enumerate([1,2,3,4]))
# for index, elem in my_enumerate([10, 20, 30, 40]):
#   print(index, elem) 
for index, elem in my_enumerate([10, 20, 30, 40], 10):
  print(index, elem)  