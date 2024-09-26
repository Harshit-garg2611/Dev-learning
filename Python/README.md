# Python : 
- Dynamic , object-oriented programming as well as functional programming .
- case sensitive language 
- interpreted , high level
- portable

[![](https://mermaid.ink/img/pako:eNp1UU1PwzAM_StWzlHVrZu05oZACCQKExUTh16yxmsDbTK5rlA17b-TUpVxYDnFfh928k6i9AaFEh--J4dD4SActtwgPNiOPQ3gD7AduPZuAjss2XoHj47Jm75EA_sBdjfP8PqS52_ZxAJYpJtUrZWc63tLHcMOqRvVizRdqGRGZ8_tUPMIRvGsyvRRwsE2jCThSbdGg1opCZcp6Uol0fqK0zJ6n5m3vj0S1ujG-Z2EStNeVwilb5pJpNbRn31zy2D8lwtbwv_mycV8Gceb8FiQQooWqdXWhE89jXAhuMYWC6HC1Wj6LEThzoGne_b54EqhmHqUgnxf1UIddNOFqj8azXhndUW6_e2isSGTbMrsJ7rzN9ssilY?type=png)](https://mermaid.live/edit#pako:eNp1UU1PwzAM_StWzlHVrZu05oZACCQKExUTh16yxmsDbTK5rlA17b-TUpVxYDnFfh928k6i9AaFEh--J4dD4SActtwgPNiOPQ3gD7AduPZuAjss2XoHj47Jm75EA_sBdjfP8PqS52_ZxAJYpJtUrZWc63tLHcMOqRvVizRdqGRGZ8_tUPMIRvGsyvRRwsE2jCThSbdGg1opCZcp6Uol0fqK0zJ6n5m3vj0S1ujG-Z2EStNeVwilb5pJpNbRn31zy2D8lwtbwv_mycV8Gceb8FiQQooWqdXWhE89jXAhuMYWC6HC1Wj6LEThzoGne_b54EqhmHqUgnxf1UIddNOFqj8azXhndUW6_e2isSGTbMrsJ7rzN9ssilY)
___
> Comments by  #
# Variables in Python : 
The name of storage location where our data is stored 
1. String 
2. int
3. Float
4. boolean : True, False 

# Input values 
- name = input("What is your name")
- print(name)
> In input output comes out in a string so we need type conversion for this 

# Type conversion : 
- int()
- float()
- str()
- bool()

# String :
variuos methods :
- name.upper()
- name.lower()
- name.find(' ') : give index 

### Method 
- in
# Operators : 
- / provide float value 
- // provide int value
- ** power opeartor 
## Logical operators 
- or 
- and
- not

# if-else opeartor 
```python
if #condition : 
      #statement
      #statement
elif #condition : 
      #statement
      #statement
else : 
      #statement
      #statement
```
## Range in python
- range(5) # 0,1,2,3,4
- returns list of numbers satrting from 0 to non-inclusive end . 

# Loops : 
1. while loop 
```python
#initialization
while condition :
        #statement
        #updation
```
>when a number is multiplied * by a string than the string gets print that much time as same of multiplied number . 
2. for loop 
- for i in range(5): <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;statements <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;statements
> for loop used over list to iterate over it . 

# Lists : 
var_name = [item1, "item2", item3]
- to access a particular index var_name[index] .
- > IMP : in python we can also use negative indexing -1 means last index -2 last second index
- To get a particular items from list we can use var_name[ starting_index:ending_index ] 
- In above ending index does not include . 
### Inbuilt Methods 
1. var_name.append(item) : add in last 
2. var_name.insert(index, item) : add at particular index
3. { item in var_name }  : return true if exists else false.
4. len(var_name) : length of list . 
5. var_name.clear() : empty the list

## Break & continue keywords 

# Tuple : 
- same as list just immutable
- var_name = (item1, item2, "item3")
- we can't change like that var_name[3] = xxxx
- 'tuple' object does not support item assignment
## Methods : 
1. count no. of times an item come 
- var_name.count(item)
2. find the first index of element 
- var_name.index(item)
# Sets :
- collection of unique elements 
- var_name = {item1,item2....} 
- > [ list ], ( tuple ), { sets }
- sets can't be accessed by index : unordered list
# Dictionary : 
- key-value pair 
- var_name = { "key1" : value1 , "key2" : value2  , "key3" : 'value3' }
- to access a key value : var_name["key"]
- to insert a new key value : var_name["key"] = value 

# Functions : 
1. in-built functions 
2. module functions : 
- when related functions, variables stored in a single file called as module .
- e.g. : import math , or we can write from math import * 
3. user defined functions 
> syntax : def function_name(parameters) : <br> 
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// statements <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return value

# File I/O in python : 
Python can be used to perform operations on a file (read, write). 
## Open, Read, & close a file : 
We have to open a file before reading or writing 

```Python
f = open("file_name", "mode") 
```
- file name : complete path of file 
- mode = [r] read mode (by default), [w] write mode
