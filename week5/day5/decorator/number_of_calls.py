def num_of_calls(func):
    def inner():
        inner.count += 1
        func()
        print("number of calls: " + str(inner.count))
    inner.count = 0
    return inner


@num_of_calls
def foo():
    pass

foo()
foo()
foo()
foo()
