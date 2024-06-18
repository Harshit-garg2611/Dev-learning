# RECURSION : A recursive function is one that calls itself
 Method of solving computational problem where solutions depends on the solution of smaller instances of same problem .

## Advantages of Recursion :
1. Clarity and Readability
2. Less Code
3. Elegant Problem Solving:
 Problems involving complex nested structures, backtracking, or divide-and-conquer techniques often have elegant and intuitive solutions when approached with recursion.

### Here are some scenarios where using loops might be a more suitable choice:
 1. Performance Concerns: 
 Loops are generally more efficient than recursion regarding time and space complexity. Recursive calls can lead to increased memory usage  because each function call is added to the stack, while a loop only requires a single memory allocation. Using a loop may be a better  choice if you're dealing with a large data set or performance-critical application.

 2. Language Limitations: 
 Some languages, including JavaScript, have a maximum call stack size, which limits the depth of your recursion. You'll run into a stack  overflow error if you exceed this limit. So a loop might be a safer option for problems where you expect deep recursive calls.

 3. Simple Iteration: 
 If you're working with a flat structure (like a simple array or list) and performing a straightforward operation that doesn't involve  nested elements or dependencies between elements, a loop is a more straightforward and efficient choice.

 4. Mutative Operations:
 If you're performing an operation that requires changing the state of a variable during each iteration, a loop is usually a clearer and  more efficient solution.

 5. Unpredictable Termination: 
 If the termination condition is not straightforward or predictable, using a loop with a clearly defined exit condition might be better.

 6. Understanding and Readability: 
 If your team or collaborators are more comfortable with iterative constructs and could find recursive solutions confusing, it may be best  to stick with loops.

## Problems :
 - Space Complexity can't be constant Stack occupy space 

## Stack Overflow :
 - Parameter occupy very much space 
 - too many calls
 - not define base case (where to stop) 

## Tail Recursion :
- A recursive function call in which the recursive call is the last statment executed by the function .