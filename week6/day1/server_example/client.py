import requests

#ex3
result= requests.get(f'http://localhost:8000/store/?name=table')
print(result.json())


#ex5
def buying_item():
    item_name = input("Please enter an item:\n")
    item= requests.get(f'http://localhost:8000/store/buy/?name={item_name}')
    item= item.json()
    print(f'Congratulations, you have just bought {item["name"]} for {item["price"]}. There are {item["inventory"]} left now in the store.')


#extension1
def try_buying():
    money=100
    item= requests.get(f'http://localhost:8000/store/price/?name=picture frame')
    item= item.json()
    print(item)
    if money >= int(item["price"]):
        update_store= requests.get(f'http://localhost:8000/store/buy/?name=picture frame')
    else:
        print("you should get a job")

try_buying()
