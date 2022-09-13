from ast import Yield


def my_accumulate(nums):
    sum = 0
    for num in nums:
        sum += num
        yield sum

for elem in my_accumulate([1,2,3,4,5]):
  print(elem) 