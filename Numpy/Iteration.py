import numpy as np

var = np.array([1,2,3,4])

# iterate
# for i in var :
#     print(i)

var1 = np.array([[1,2,3,4],[5,6,7,8]])
# iterate
# for i in var1 :
#     print(i)

# for i in var1 :
#     for j in i :
#         print(j)

var2 = np.array([[[[1,2,3,4],[1,2,27,29]]]])
# for i in np.nditer(var2) :
#     print(i)

for i,j in np.ndenumerate(var2) :
    print(i,j)