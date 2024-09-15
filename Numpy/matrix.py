import numpy as np

var = np.matrix([[1,2],[4,5]])
var_2 = np.matrix([[1,2],[4,5]])
# print(var*var_2)

# print()
var_1 = np.array([[1,2],[4,5]])
var_3 = np.array([[1,2],[4,5]])
# print(var_1*var_3)


# Matrix functions ......................................
var_matrix = np.matrix([[1,2,3],[6,5,3],[6,3,1]])

# Transpose
# print(np.transpose(var_matrix))
# print(var_matrix.T)

# inverse :
# print(np.linalg.inv(var_matrix))

# Power :
# print(np.linalg.matrix_power(var_matrix,2))
# print()
# print(np.linalg.matrix_power(var_matrix,0))
# print()
# print(np.linalg.matrix_power(var_matrix,-2))
# print()

# Determinant.................
# print(np.linalg.det(var_matrix))