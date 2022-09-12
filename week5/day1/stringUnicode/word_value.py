def get_word_value(word):
    sum = 0
    for c in word:
        sum += ord(c)-96
    return sum
    

print(get_word_value("day"))