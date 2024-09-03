import numpy as np

var = np.array([1,2,3,4,5,5,6])
var1 = np.array([1,2,3,4,4,2,2,3,4,4])
# copy ........................
copy_var  = var.copy()
# view ............
view_var = var1.view()
# print("var1", var1)
# print("viw var", view_var)


#change in copy
# copy_var[5] = 6
# copy_var[6] = 7
# print("var: ",var)
# print("Copy var", copy_var)

# change in view
view_var[5] = 6
view_var[6] = 7
print("var1: ",var1)
print("View var", view_var)
