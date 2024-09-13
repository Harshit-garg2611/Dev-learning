import pandas as pd
# To check version
# print(pd.__version__)

# df_csv = pd.read_csv('C:/Users/hgarg/Downloads/currency.csv')
# print(df_csv)

df = pd.read_excel('C:/Users/hgarg/Downloads/SampleData.xlsx')
# print(df.to_string())
print(df.describe())
