import numpy as np

var = np.array([1,3,6,8,2])

# v = np.insert(var,3,7)
v = np.insert(var,(3,5),[34,87])
# print(v)


d = np.delete(v, (3,5))
# print(d)

