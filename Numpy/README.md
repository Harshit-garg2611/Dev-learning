# Numpy :
- fundamental package for scientific computing in python .
- python library that provide multidimensional array objects 

## Advantages of using Numpy arrays over lists : 
- consumes less memory 
- fast as compared to python list
- convenient to use .

List : [1,2,3,4]
ARRAY : [1 2 3 4]

## Difference Between NumPy Arrays and Python Lists

| **Feature**                   | **NumPy Arrays**                                                                                        | **Python Lists**                                                                                      |
|-------------------------------|---------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| **Data Type**                 | Homogeneous: All elements must be of the same data type.                                                | Heterogeneous: Elements can be of different data types.                                               |
| **Performance**               | Faster for numerical operations due to optimized C code.                                                | Slower for numerical operations because of Python’s dynamic typing.                                   |
| **Memory Efficiency**         | More memory-efficient for large datasets.                                                               | Less memory-efficient, especially with large datasets.                                                |
| **Element-wise Operations**   | Supports efficient element-wise operations.                                                             | Requires explicit loops or list comprehensions for element-wise operations.                           |
| **Dimensionality**            | Supports multi-dimensional arrays (e.g., 2D, 3D arrays).                                                | Primarily one-dimensional; nested lists needed for multi-dimensional data.                            |
| **Broadcasting**              | Supports broadcasting, allowing operations on arrays of different shapes.                               | Does not support broadcasting; requires manual handling for operations between different-sized lists. |
| **Functionality**             | Rich set of functions for mathematical, logical, and statistical operations.                            | Basic functionality; requires additional coding or libraries for complex operations.                  |
| **Memory Allocation**         | Allocates memory once at array creation, leading to more predictable memory use.                        | Dynamic memory allocation, which can lead to fragmentation and less efficient memory use.             |
| **Modification capabilities** | Not used at the places where need to modify a lot . Less functions / methods available for modification | Good for fast modifications in data set                                                               |
| **Slicing and Indexing**      | Advanced slicing, including support for multi-dimensional indexing and boolean indexing.                | Basic slicing and indexing, primarily for one-dimensional lists.                                      |
| **Mutability**                | Mutable: You can change elements in place, but the type and size are fixed.                             | Mutable: Elements and the list's size can change, and types can be mixed.                             |
| **Library Dependency**        | Requires the NumPy library.                                                                             | Built-in Python feature, no external library required.                                                |
| **Use Cases**                 | Ideal for numerical computations, large datasets, and scientific computing.                             | Suitable for general-purpose programming and mixed data types.                                        |
| **Initialization**            | Requires explicit initialization (e.g., `np.array([1, 2, 3])`).                                         | Easy to initialize (e.g., `[1, 2, 3]`).                                                               |
| **Error Handling**            | Strict in type enforcement, which can help catch errors early.                                          | More flexible, but this flexibility can sometimes lead to unintended bugs.                            |
| **Integration**               | Integrates well with other scientific libraries like SciPy, Pandas, etc.                                | Can be integrated with other libraries but not as efficiently as NumPy.                               |

# [Creation of array in Numpy :](./array.py) 
- Step 1 : import numpy as np 
- Step 2 : var_name = np.array( [ list pass ] )

- > To check dimension of array : var_name.ndim
- > To check size (i.e. no. of elements in array ) : var_name.size 

- Shortcut to create a n-d array

```python
import numpy as np

arrn = np.array([1,2,3,4], ndmin=10)

```
# [Nupmy array with functions (special arrays) :](./Special_arrays.py) 
1. Array filled with zeroes : 
```python
import numpy as np 
arr_zero = np.zeros(length)
```
2. Array filled with ones :
similiarly just put `ones` in place of zeros . 
3. Empty array : replace `.empty` with zeroes and pass dimension as same 
 ```python
import numpy as np
      arr =  np.empty(5)
```
> `Note `: In empty array it occupies the memory of previous build array in the memory if left unfiled .

4. Array with range of elements :
```python
np.arange(range)
#Build a 1-d array
```
> will use reshape to make it to n-d further .
5. identity matrix : 
```python
np.eye(dimension)
# It create a dimension x dimension identity matrix 
```
6. Create array with values that are spaced linearly at a specific interval :
```python
np.linspace(from,to,num=no. of elements)
# from,to : range
```
# [Create Numpy array with random numbers : ](./Random.py)
1. `rand() : `
the function is used to generate random value between 0 and 1 . 
```python
var_name = np.random.rand(number of elements)
# It generates the 1-d array of random value between 0 & 1 of number of elements provided .
```
- To generate a random array of n dimension just pass rows and coloumns in place of number of elements
```python
var_name = np.random.rand(rows,col)
```

2. `randn() : ` the function is used to generate random value close to zero . This may return possitive or negative value as well.
`Syntax similiar`


3. `ranf : ` This function do random sampling of numpy . It returns an array of specified shape and fills it with random floats in the half open interval ` [0.0, 1.0) `


4. `randint() : ` The function is used to genrate a random integer number between a given range .
```python
var_name = np.random.randint(min, max, total_elements)
```
> To check data type of element or numpy array : var_name.dtype

### To convert datatypes : 
```python
var = np.array([1,2,3,4])
new_1 = var.astype( float )
print( new_1.dtype )
```

### [Arithmetic operations](./Arithmetic_opeartors.py)

### [Arithmetic functions](./Arithmetic_functions.py) 

# Shape & Reshaping in numpy 
- [Shaping](./Shape.py)&nbsp;&nbsp;&nbsp;**&nbsp;imp
```python
var.shape
```
- [Reshaping](Reshaping.py)
```python
var.reshape(rows,col)
```
> To convert n-dim in 1-d array : 
```python
var.reshape(-1)
```
## [Broadcasting in NumPy :](./Broadcasting.py)
If we try to perform arithmetic operations on numpy array than if dimensions are different in them than it throws broadcasting error . 
> But if there is one dimension (i.e. 1 )common seeing from r.h.s in any of two operands than it can perform arithmetic operations . 
> Condition : r.h.s dimension should be one of anyone operand & l.h.s dimension should be same  

# Indexing & Slicing : 

### Indexing : 
- Access element through index 1-d : var[ index ] . 
- Access element through index 2-d : var[ row, col ] . 
- Access element through index 3-d : var[ row, row, col ] .

### [Slicing of array :](./Slicing.py)
```python
var_name[start_index : end_index : step]
# Non-inclusive end 
# if want a slicing till end than don't need to give end index
# By default step is 1
# In 2-d array first pass row number than slicing same .
```
# [Iterating NumPy Array :](./Iteration.py) 
- simple loops and nested loops
- Function to iterate : `np.nditer(var)`
```python
# variable can be of any dimension
var = np.array([[[[1,2,3,4],[1.2,27,29]]]])
for i in np.nditer(var) :
         print(i)
```
- to get indexing along with value we use `ndneumerate()` function . 
```python
for i,j in np.ndenumerate(var2) :
    print(i,j)
```

## [Copy v/s View :](./Copy_View.py)

| Copy                                                         | View                                                                                                        |
|--------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| Copy Owns the data                                           | View does not own the data                                                                                  |
| Copy of array is a new array                                 | Ony view of original array                                                                                  |
| The changes made in copy data does not reflect in main array | any changes made to view array reflect in original array & changes made in original array reflects in view  |



## Join & Split 

### [JOIN](./Join.py) : 
Joining means putting content of two or more array in a single array

```python
import numpy as np
# 1-d array
np.concatenate((var1, var2))

# in 2-d array : 
# axis-0 = y-axis
# axis-1 = x-axis

# in 3-d array : 
# axis-0 : y axis
# axis-1 : x-axis
# axis-2 : z-axis

np.concatenate((var1, var2), axis=?)
```
- there is also a stack function through which we can merge our arrays . 
```python
import numpy as np 
# we can do dimensionally merge through this method 
#  Through 3 types : horizontally , vertically, along height
axis = 0 : vstack (dimension change)
hstack : horizontally
dstack : alonh column

```
### [Split :](./split.py) 
```python
import numpy as np 

var = np.array([list])

split_arr = np.split(var, n)
split_arr2 = np.array_split(var, n)
```
> Here n is the no. of times you want to split the given array
> type(split_arr) : list

# [Numpy array Functions :](./functions.py) 


