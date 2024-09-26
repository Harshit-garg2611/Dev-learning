# Panda 
- Panel data or Python data created by Wes McKinney 2008 . 

## Functions : 
It has functions of analyzing, cleaning, exploring and data manipulation . 

## Why Use Pandas? 
Pandas allows us to analyze big data and make conclusions based on statistical theories.

Pandas can clean messy data sets, and make them readable and relevant.

## Applications : 
- Easy handling of missing data .
- Size mutability : columns can be inserted and deleted from DataFrame and higher dimension objects . 
- Automatic and explicit data alignment . 
- Powerful flexible group by functionality .
- Intelligent labelled based slicing, fancy indexing 
- Intutive merging and joining data sets 
- Flexible reshaping and pivoting of data sets . 

## Reading of csv files : 
```python
import pandas as pd 
df = pd.read_csv('data.csv')
print(df.to_string())
# using to_string() to print entire data frame as without it , It shows only first 5 and last 5 rows
```


## Reading of excel file : 
- install openpyxl library

```python
import pandas as pd

df = pd.read_excel('path/filename')
```
# Data Structures of pandas : 
1. Series
2. DataFrames 

# [Series :](./series.py) 
A Pandas Series is like a column in a table is a 1-d labelled array capable of holding data of any type

The object supports both integer and label based indexing . 

### Label : 
```python
# Create labels :
myVar1 = pd.Series(a, index = ('x', 'y', 'z', 'w'))
```

### Key-value objects : 
The keys of the dictionary become the labels.
```python
calories = {"day1": 420, "day2": 413, "day3": 520}
myvar3 = pd.Series(calories)
print(myvar3["day2"])
```
- include only the required datasets in series
```python
myvar4 = pd.Series(calories, index = ("day1", "day3"))
```
# [DataFrames : ](./dataframes.py) 
A Pandas DataFrame is a 2-dimensional data structure, like a 2-dimensional array, or a table with rows and columns.
```python
df = pd.DataFrame(data)
print(df)
```
- Data frame is like a table with rows and columns . 
- use `loc` to return one or more specified rows . 
```python
print(df.loc[[0,1]])
```
>Note: When using [ ], the result is a Pandas DataFrame.
- Same indexing as in series . 

# [Analyzing of Data :](./analyze.py) 

### View data : 
1. To view entire data :
```python
print(df.to_string())
```
2. To view first n no. of rows 
```python
print(df.head(n))
```
3. To view last n rows 
```python
print(df.tail(n))
```
4. To describe data : count, sum, mean, median
```python
print(df.describe())
```
5. To get info i.e.: data types 
```python
print(df.info())
```
6. TO check null values 
```python
print(df.isnull())
# .sum() tells column wise which has null value or not null value 
print(df.isnull().sum())
```

### [Cleaning of data :](./cleaning.py) 
1. Duplicate values : 
```python
print(df.duplicated())
#  row wise duplicated data 
#  tO check A duplicate value in a column 
print(df["col"].duplicated())
# .sum tells no. of duplicated value 
```
2. Drop duplicates : 
```python
# drop duplicates from a particular column
print(df.drop_duplicates("Primary key column"))
```
3. [Missing data :](./missing.py) 

```python
# Delete all null values rows from data 
print(df.dropna())
```
```python
# To replace all nan values with some value
no_null = df.replace(np.nan, 0)
print(no_null.isnull().sum())
```
```python
#  To replace nan values of a particular column with some value 
# to replace nan value of only salary with 0
df["salary"] = df["salary"].replace(np.nan, 30000)
print(df.to_string())
```
```python
# forward fill 
# Backward fill 
print(df.fillna(method = "bfill/ffill"))
```
## [Column Transformation in pandas :](./column_transform.py) 
To create a new column out of existing one to analyze or manipulate the data 
```python
# To extract a short value of word by using map 

def extract(value) : 
     return value[0:3] 

data["new col"] = data["old col"].map(extract) 

```

# [Group By :](./Group_by.py) 
```python
df.groupby(["col1", "col2", "col3"]).agg({"count emp Id ": "count function"})
# First argument array 
# aggregate argument dictionary
```

# [Merge, Join & Concatenate :](./merge_join_concat.py) 
