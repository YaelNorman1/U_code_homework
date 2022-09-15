def add(num1, num2):
    return num1+num2

def test_add_fail():
  assert add(2, 1) == 2, "test failed need to get 3"

def test_add_success():
  assert add(0, 1) == 1, "test success "