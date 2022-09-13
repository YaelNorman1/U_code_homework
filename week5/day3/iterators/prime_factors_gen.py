from math import ceil, sqrt


def get_prime_factors_generator(number):
    if number <= 1: return []
    prime = next((x for x in range(2, ceil(sqrt(number))+1) if number%x == 0), number)
    return [prime] + get_prime_factors_generator(number//prime)

for x in get_prime_factors_generator(100):
  print(x)
        