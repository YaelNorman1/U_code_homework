import calendar

print(calendar.isleap(2010))
print(calendar.isleap(2020))


def count_leap_years():
    count=0
    for year in range(2020,2081):
        if calendar.isleap(year):
            count +=1
    return count

print(count_leap_years())

print(calendar.weekday(2028,3,14))

