import numpy as np

var = np.array([2,4,5,6,71,45,72,9,-2])


print("Max : ",np.max(var))
print("Min : ",np.min(var) )
print("argMax : ", np.argmax(var)) # Tell about index of max number
print("argMin : ", np.argmin(var))  # Tell about index of min number
# sin, cos, sqrt, cumsum
#.................................................
# Here 2-d array works along axis
# axis = 0 works along coloumn
# axis = 1 works along rows
var1 = np.array([[2,5,4,2],[5,7,1,9]])
print(np.min(var1,axis=0))
# output : 2 5 1 2
print(np.max(var1, axis=1))
# output : 5 9
