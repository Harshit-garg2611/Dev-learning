// this keyword behave different in strict mode & non strict mode .
"use strict"


// this in global space 

console.log(this);  // globalObject 

// global object depend on JRE : it behave different on browser (window), different in Node.js environment (global)


// this inside a function 

function x(){
    console.log(this)
    // in strict mode it is undefined 
}
x(); // in strict : undefined && non-strict : global object


// this in non-strict mode : this substitution 

/* Note : In non strict mode : 
If the value of this keyword is undefined or null this keyword will be replaced with global object*/


// this keyword  also depends on how function is called  . 
window.x();  // strict : global object 


// this inside object's method 
const obj = {
    a:10,
    x(){
        console.log(this);
    }
}
obj.x();  // object 


// Arrow functions 
// arrow functions don't have their own this they take value of this from it's enclosing lexical environment 

// However, arrow functions do not have their own this binding. Therefore, their this value cannot be set by bind(), apply() or call() methods, nor does it point to the current object in object methods.


// value of this in DOM 
// refernce to that HTML element 