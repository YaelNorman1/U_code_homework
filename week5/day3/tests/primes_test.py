import primes

def test_is_three_prime():
    assert primes.is_prime(3) == True, "test should success, 3 is a prime number "

def test_five_six_seven():
    assert primes.are_prime_numbers(5,6,7) == False, "test fails, 6 is not a prime number"

def test_one():
    assert primes.is_prime(0) == False, "test fails. 0 is not prime"