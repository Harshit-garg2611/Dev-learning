import pandas as pd

df = pd.read_csv('company1.csv')

# print(df.to_string())


# Check duplicates value
# print(df["EEID"].duplicated().sum())


# drop duplicates from a particular column
print(df.drop_duplicates("EEID"))
