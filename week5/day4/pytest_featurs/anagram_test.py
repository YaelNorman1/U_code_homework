import pytest


def anagram(str1, str2):
    if len(str1) <= len(str2):
        return check_letters(str2, str1)
    else:
        return check_letters(str1, str2)

def check_letters(str1, str2):
    for c in str1:
        if c not in str2:
            return False
    return True


@pytest.mark.parametrize("str1, str2, result", [("elbow", "below", True), ("hello", "hi", False)]) 
def test_anagram(str1, str2, result):
    assert anagram(str1, str2) == result, "elbow and below are anagram words"
    assert anagram(str1, str2) == result, "hello and hi are NOT anagram words"

    