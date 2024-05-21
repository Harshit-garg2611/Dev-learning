// let a = 5;
// for(let i=0;i<=a;i++){
//     console.log(" value : ", i)
// }
// console.log('bye !')
// console.log(process.argv);
// let args = process.argv 
// for(let i=2;i<args.length;i++){
//     console.log(args[i]);
// }


// const someVlaue = require("./math")
// console.log(someVlaue);
// console.log(someVlaue.sum(2,5))

// let info = require('./fruits')
// console.log(info)
// let figlet = require("figlet");

// figlet("Harshit Garg !", function (err, data) {
//     if (err) {
//       console.log("Something went wrong...");
//       console.dir(err);
//       return;
//     }
//     console.log(data);
//   });

import {sum, pi} from "./math.js" ;
console.log(sum(1,2));