import pandas as pd


a = [1,3,4,6]
myVar = pd.Series(a)
# print(myVar)
# print(myVar[4])     : value error


# Create labels :............................................
myVar1 = pd.Series(a, index = ('x', 'y', 'z', 'w'))
# print(myVar1)

# Access by referring to label .............................
# print(myVar1['w'])


# Key-value objects as series ..................................

calories = {"day1": 420, "day2": 413, "day3": 520}
myvar3 = pd.Series(calories)
# print(calories)
# print(myvar3)
# print(myvar3["day2"])

#include only the required datasets in series
myvar4 = pd.Series(calories, index = ("day1", "day3"))
# print(myvar4)