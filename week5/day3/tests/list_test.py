from re import T
import string


my_list = ['I', 2, 'Love', 4, 56, 'Coding', "Python", "in", [8,9,10]]

def is_in_list(element):
    if element in my_list:
        return True
    else:
        return False

def all_in_list(*args):
    
    all_element_in_list = [is_in_list(arg) for arg in args]
    return all(all_element_in_list)

def is_upper_str():
    for element in my_list:
        if type(element) == str:
            if not element.isupper():
                return False
    return True

is_upper_str()


def test_number():
  assert is_in_list(3) == False,"num 3 is not in list" # Should assert if number 3 is in my_list
  assert is_in_list(56) == True,"num 56 is in list" # Should assert if number 56 is in my_list
  
def test_str():
  assert all_in_list("I","Love","Coding") == True," I Love Coding is in list" # Should assert if "I", "Love" and "Coding" are in my_list

def test_upper_str():
  assert is_upper_str() == False, "not all words in list are upper case" # Should assert if all the strings in my_list are in upper case﻿

def test_negative():
  assert not is_in_list(6) == True, "6 is not in list" # Should assert if number 6 is no﻿t in﻿ my_list - result should be true