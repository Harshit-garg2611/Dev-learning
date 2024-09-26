import pandas as pd

dic = {"Fruits" : ["Mango", "Apple", "Banana", "Papaya"],
        "Price" : [80,120,50,25],
        "Quantity" : [30,61,82,91]}
df1 = pd.DataFrame(dic)
# print(df1)

df2 = df1.copy()
df2.loc[0,"Price"] = 65
df2.loc[2,"Price"] = 65
df2.loc[3,"Price"] = 30
df2.loc[2,"Quantity"] = 80

# print(df2)
# print(df1.compare(df2))
print(df1.compare(df2, keep_shape=True))



