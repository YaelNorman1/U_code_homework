import pytest

# def store():
#   items = ("apple", "banana", "orange")
#   amount = (2, 2, 1)
#   return dict(zip(items, amount)) 

def buy_banana(store):
    store_stock = store()
    store_stock.update({"banana" , store_stock.get("banana") -1 })
    return store_stock

def buy_two_bananas():
    buy_banana()
    buy_banana()


# def test_buy_banana():
#     assert     


@pytest.fixture
def store():
  return {
    "apple": 2,
    "banana": 2,
    "orange": 1
  } 