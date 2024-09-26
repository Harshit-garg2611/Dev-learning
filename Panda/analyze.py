import pandas as pd

# df = pd.read_csv('./currency.csv')
# print(df)

df = pd.read_excel('./SampleData.xlsx')

# To read entire data
# print(df.to_string())

# to print first 10 rows
# print(df.head(10))

# to print last 10 rows
# print(df.tail(10))

# To describe data
# print(df.describe())

# info
# print(df.info())

# to check null
# print(df.isnull().to_string())
print(df.isnull().sum())
