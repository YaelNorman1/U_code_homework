def encode(msg):
    return " ".join([str(ord(c)) for c in msg])


print(encode("Hello"))

def decode(msg):
    nums= msg.split()
    return "".join([chr(int(num)) for num in nums])

print(decode("72 101 108 108 111"))
print(decode(encode("Hello")))