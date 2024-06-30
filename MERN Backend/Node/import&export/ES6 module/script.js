import { usersData, myName } from "./userData.js";  
// import { User,myName } from "./userData.js";

console.log(usersData);
// console.log(User)
console.log(myName);


// WE can also import by different name 
// import { usersData as User } from "./userData.js";



// when we import default than we do not use curly brackets 

import productsData from "./productData.js";
console.log(productsData)


// We can import all with using comma in b/w default export without curly braces and named exports with curly baces 


// we can import with whatever name the default export 
// import a from "./productData.js"



// we can import everything from a file using 
// import * as something from "./userData.js"  
// -> Here it import and make a object Module and from there we use .