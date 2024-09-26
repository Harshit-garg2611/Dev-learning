import pandas as pd

data = pd.read_excel('ESD.xlsx')

# print(data.head(10))
# print(data.columns)



gp = data.groupby(["Department", "Job Title", "Gender"]).agg({"EEID" : "count"})
print(gp)
