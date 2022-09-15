def is_prime(num):
    if num > 1:
        for i in range(2, int(num/2)+1):
            if (num % i) == 0:
                return False
        else:
            return True
    else:
        return False



    # if num > 1:
    #     for i in range(2, num+1):
    #         if (num % i) == 0:
    #             return False
    # return True


def are_prime_numbers(*args):
    
    all_prime_numbers = [is_prime(arg) for arg in args]
    
    return all(all_prime_numbers)

print(are_prime_numbers(5,6,7))