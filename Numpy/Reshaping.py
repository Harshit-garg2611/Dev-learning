import numpy as np

var = np.array([3,6,3,2,8,6])
x = var.reshape(3,2)
# print(x)

#  to convert in 3-d pass 3 arguments in it
# to convert n-dim into 1-d array
var3 = np.array([[[1,2,3],[5,5,6]]])
print(var3.reshape(-1))