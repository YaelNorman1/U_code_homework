user_id = 3058
bonus_months = 3

user_months = {
    1552: 18,
    7021: 2,
    532: 12,
    3058: 9,
    1102: 4
}

user_months = [value+bonus_months for value in user_months.values()]

print("Giving user " + str(user_id) + " an extra " + str(bonus_months) + " month bonus")
print(user_months)