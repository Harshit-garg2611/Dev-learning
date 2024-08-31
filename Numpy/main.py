import numpy as np

#print(np.version.version)  # version number
#print(np.version.short_version)  # short version number
#print(np.version.full_version)  # full version number (including Git revision)
#print(np.version.git_revision)  # Git revision
#print(np.version.release)  # True if it's a release version, False otherwise

x = np.array([1,2,3,4])
# print(x)
# To check type .....................
# print(type(x))
y = [1,2,3,4]
# print(y)
# print(type(y))


# Numpy array v/s list
a =   [j**4 for j in range(1,9)]
# print(timeit.timeit('[j**4 for j in range(1,9)]'))
print(a)

b = np.arange(1,9)**4
print(b)



