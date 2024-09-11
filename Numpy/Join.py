import numpy as np

# concatenate method......................
var1 = np.array([1,2,3,4])
var2 = np.array([7,6,5])
# arr = var1+var2
arr = np.concatenate((var1,var2))

# print(arr)


vr1 = np.array([[1,2,3,4],[5,4,3,2]])
vr2 = np.array([[3,4,6,9],[4,2,6,8]])
vr = np.concatenate((vr1,vr2),axis=0)
# print(vr)


# stack method......................
one = np.array([1,2,3,4,5])
two = np.array([3,1,5,7,5])

# a_new = np.stack((one,two), axis=2)
a_new1 = np.dstack((one,two))

# print(a_new)
print()
print(a_new1)

