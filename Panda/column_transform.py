import pandas as pd

df = pd.read_excel('ESD.xlsx')

# print(df.head(10))

df.loc[(df["Bonus %"] == 0), "GetBonus"] = "no bonus"
df.loc[(df["Bonus %"] > 0), "GetBonus"] = "bonus"

print(df.head(10))
