fridge={
    "milk" : 2,
    "bananas" : 4,
    "juice" : 2
}

if fridge["milk"]==1:
    print("There is one bottle of milk left")
# else:
    # print("There is "+ str(fridge["milk"]) +" bottle of milk left")

closet = {
    "shirts": {
        "blue": 4,
        "black": 1,
        "white": 13,
        "flamingo-pink": 2
    },
    "pants": {
        "shorts": {
            "purple": 1,
            "red": 2,
            "flamingo-pink": 3
        },
        "jeans": {
            "denim": 8,
            "organic": 1
        }
    },
    "jackets": {}
}

# print(closet["shirts"]["white"])
print(closet["pants"]["shorts"]["flamingo-pink"])
closet["pants"]["jeans"]["organic"] = 7
closet["pants"]["jeans"]["denim"] -= 4

sum_shirts=0
for shirt in closet["shirts"].values():
    sum_shirts += shirt


if closet["pants"]["shorts"]["flamingo-pink"] > sum_shirts:
    print ("bottom")
else:
    print ("top")

def get_squares_dictionary(num):
    square_dict={}
    for i in range(num):
        square_dict[i] = i**2
    return square_dict
    #  return {x: x ** 2 for x in range(1, n + 1)}


print(get_squares_dictionary(5))