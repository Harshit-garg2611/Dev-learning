import numpy as np

var = np.array([1,3,2,4,2,5,6,8,2,6,4,2])

# search
x = np.where(var==2)

# print(x)

# search sorted
var1 = np.array([1,2,4,6,8,9])
x1 = np.searchsorted(var1,[3,5,10,12])
# print(x1)

# print(np.sort(var))


# Filter
f = [True,False,True,False,True,False]
# print(var1[f])

# Shuffle
# np.random.shuffle(var1)
# print(var1)

# unique
# print(np.unique(var, return_index=True, return_counts=True))

# resize
# print(np.resize(var, (3,4)))

# Flatten and ravel
var3 = np.array([[4,7,2],[6,2,9],[8,2,1]])
# print(var3.flatten(order="K"))
print(np.ravel(var3))