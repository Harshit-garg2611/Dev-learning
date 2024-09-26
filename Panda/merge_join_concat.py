import pandas as pd

data1 = {"Emp_Id" : ["E101","E102", "E103", "E104", "E105"],
         "Name" : ["Harshit", "Murari", "Alok", "Garvit", "Aayush"]}
data2 = {"Emp_Id" : ["E101","E109", "E103", "E104", "E108"],
         "Salary" : [74000,56000,23000,50000,42500],
         "City": ["Panipat", "Darbanga", "Muzzafarpur", "Gurugram", "Kaithal"]}

df1 = pd.DataFrame(data1)
df2 = pd.DataFrame(data2)

# print(df1)
# print()
# print(df2)

# Merge,,,,,,,,,,,,,,,,,,,
# print(pd.merge(df1,df2,on="Emp_Id"))
# How attribute.................


# print(pd.merge(df1,df2,on="Emp_Id", how="left"))
# print(pd.merge(df1,df2,on="Emp_Id", how="right"))

# print(pd.concat([df1,df2]))



