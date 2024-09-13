import pandas as pd

data = {
   'calories' : [231,542,764],
    'duration' : [50,45,32],
    'timing' : [50,45,32],
}

# print(data)

# load data into dataframes

df = pd.DataFrame(data)
# print(df.loc[[0,1]])

df_var = pd.DataFrame(data, index = ("x", "y", "z"))
print(df_var.loc[["y"]])
