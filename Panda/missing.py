import pandas as pd
import numpy as np


df =  pd.read_csv('./company1.csv')

# print(df.dropna())

# print(df.to_string())


# To replace nan values with some value
# no_null = df.replace(np.nan, 0)
# print(no_null.isnull().sum())

# to replace nan value of only salary with 0
# df["salary"] = df["salary"].replace(np.nan, 30000)
# print(df.to_string())


# forward and backward fill
# print(df.fillna(method = "ffill"))
# print(df.fillna(method = "bfill"))
