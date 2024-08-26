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

| **Feature**                              | **NumPy Arrays**                                          | **Python Lists**                                         |
|------------------------------------------|-----------------------------------------------------------|----------------------------------------------------------|
| **Data Type**                            | Homogeneous: All elements must be of the same data type.  | Heterogeneous: Elements can be of different data types.  |
| **Performance**                          | Faster for numerical operations due to optimized C code.  | Slower for numerical operations because of Python’s dynamic typing. |
| **Memory Efficiency**                    | More memory-efficient for large datasets.                 | Less memory-efficient, especially with large datasets.   |
| **Element-wise Operations**              | Supports efficient element-wise operations.               | Requires explicit loops or list comprehensions for element-wise operations. |
| **Dimensionality**                       | Supports multi-dimensional arrays (e.g., 2D, 3D arrays).  | Primarily one-dimensional; nested lists needed for multi-dimensional data. |
| **Broadcasting**                         | Supports broadcasting, allowing operations on arrays of different shapes. | Does not support broadcasting; requires manual handling for operations between different-sized lists. |
| **Functionality**                        | Rich set of functions for mathematical, logical, and statistical operations. | Basic functionality; requires additional coding or libraries for complex operations. |
| **Memory Allocation**                    | Allocates memory once at array creation, leading to more predictable memory use. | Dynamic memory allocation, which can lead to fragmentation and less efficient memory use. |
| **Slicing and Indexing**                 | Advanced slicing, including support for multi-dimensional indexing and boolean indexing. | Basic slicing and indexing, primarily for one-dimensional lists. |
| **Mutability**                           | Mutable: You can change elements in place, but the type and size are fixed. | Mutable: Elements and the list's size can change, and types can be mixed. |
| **Library Dependency**                   | Requires the NumPy library.                               | Built-in Python feature, no external library required.   |
| **Use Cases**                            | Ideal for numerical computations, large datasets, and scientific computing. | Suitable for general-purpose programming and mixed data types. |
| **Initialization**                       | Requires explicit initialization (e.g., `np.array([1, 2, 3])`). | Easy to initialize (e.g., `[1, 2, 3]`).                 |
| **Error Handling**                       | Strict in type enforcement, which can help catch errors early. | More flexible, but this flexibility can sometimes lead to unintended bugs. |
| **Integration**                          | Integrates well with other scientific libraries like SciPy, Pandas, etc. | Can be integrated with other libraries but not as efficiently as NumPy. |
