import pytest


def fibonacci(num):
    if num < 0:
        print("Incorrect input")

    elif num == 0:
        return 0

    elif num == 1 or num == 2:
        return 1
 
    else:
        return fibonacci(num-1) + fibonacci(num-2)

@pytest.mark.parametrize("index, result", [(2,1), (5,4)]) 
def test_fibonacci(index, result):
    assert fibonacci(index) == result, "test passed"
    assert fibonacci(index) == result, "test fails"

