import numpy as np

x = [1,2,3,4,5]

y = np.array(x)
# print(y)


# input numbers from user and convert it to array
#Creation of 1-d array
l = []
for i in range(1,5) :
    data = int(input("Enter number"))
    l.append(data)
y = np.array(l)
# print("created array is : " , y)
# print(y.ndim)

#Creation  of 2-d array
# l2 = [[1,2,3,4], [2,3,4,5],[5,7,8,3]]
# arr2 = np.array(l2)
# print(arr2)
# print(arr2.ndim)

# 3-d array
# l3 = [[[1,2,3,4], [5,6,7,3], [6,2,8,9]]]
# arr3 = np.array(l3)
# print(arr3)
# print(arr3.ndim)

#n-d array
# arrn = np.array([1,2,3,4], ndmin=10)
# print(arrn)
# print(arrn.ndim)

