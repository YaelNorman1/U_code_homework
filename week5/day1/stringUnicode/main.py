def print_unicode_table(start, end):
    for c in range(start,end):
        print(f'{c}: {chr(c)}')

print_unicode_table(200,1000)