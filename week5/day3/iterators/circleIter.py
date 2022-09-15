def CircleIter(arr, iter_times):
    index = 0
    while iter_times > 0:
        yield arr[index]
        index += 1
        index = index % len(arr)
        iter_times -= 1

for x in CircleIter([1,2,3],4):
  print(x, end=" ")
  for y in CircleIter([5,6],3):
    print(y, end=" ")
print() 