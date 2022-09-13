import math

print(math.floor(-5.3))
print(math.ceil(18.6))

def calc_polygon(n,l):
    return (n * (l)^2)/(4 * math.tan(math.pi/n))

print(calc_polygon(3,2))