import numpy as np

# 1-d array
# .................................................................

var = np.array([1,2,3,4])

var_add = var + 3
# output : [4 5 6 7]
# print(var_add)

var1 = np.array([3,5,7,8])
var2 = np.array([5,1,4,7])
var = var1+var2
# output : [8 6 11 15]
# print(var)

a=np.array([3,4,5,6])
b=np.array([3,1,2,6])

# .................................................................
# NOTE : We can also perform subtraction, multiplication, division, modulo, power same as above

# .................................................................

# We can also use np functions
np.add(a,b)
np.subtract(a,b)
np.multiply(a,b)
np.divide(a,b)
np.mod(a,b)
np.power(a,b)
np.reciprocal(a)
# similarly as in 2-d or n-d array just functions perform (i,j) similarly