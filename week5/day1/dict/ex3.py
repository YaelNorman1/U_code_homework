country_populations= {}

country_populations["Ghana"] = 28
country_populations["Brazil"] = 209
country_populations["Mongolia"] = 3

country= "Ghana"

if country_populations[country]>=50:
    print(f'{country} is a big country')
else:
    print(f'{country} is a small country')