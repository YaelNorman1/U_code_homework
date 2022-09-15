# s1 = {1, 2, 3, 4}
# s2 = {1, 5, 6, 7}
# s3 = {5, 6, 7, 8}

# print(s1.isdisjoint(s2))
# print(s1.isdisjoint(s3))
# print(s2.isdisjoint(s3))

s1 = {'a', 'b', 'c', 'd'}
s2 = {'a', 'b', 'c'}
s3 = {'a', 'b', 'e'}
s4 = {'a', 'b', 'c', 'd'}
s5 = set()

# print(s1.issuperset(s2))  #s2.issubset(s1)
# print(s1.issuperset(s3))
# print(s1.issuperset(s4))
# print(s1.issuperset(s5))

fs = frozenset((1, 2, 3, 4))
print(fs)
print(type(fs))

fs = frozenset([1, 2, 3, 4])
print(fs)