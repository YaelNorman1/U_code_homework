from codecs import ascii_decode


def to_upper(c):
    ascii_value= ord(c)
    if ascii_value >= ord("a") and ascii_value <= ord("z"):
        return chr(ord(c)-32)
    else:
        return c

print(to_upper("d"))    # "D"
print(to_upper("Q"))    # "Q" (no change)
print(to_upper("!"))