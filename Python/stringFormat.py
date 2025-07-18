# To append name in string 


name = "Harshit"
# Concatenation method 

# print("My name is ", name)
# print("My name is "+name)


# String format method 

print("My name is {}".format(name))

#  here curly braces act as a placeholder where i can fit my variable later on 
#  with multiple variable 

age = 22 
print("My name is {}. My age is {}".format(name,age))

# Note : print statement in python always prints a new line however you can print it in same line by end character  

print("Hello", end=' ')
print("World !")

# you can add space, comma (,) also. 


# separation in same line 

print("orange", "banana", "apple", sep='|')
