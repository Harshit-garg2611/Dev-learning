// let n = 5;
// for(let i=0;i<=5;i++){
//     console.log("Hello ", i);
// }

// let args = process.argv;
// for(let i=0;i<args.length;i++){
//     console.log(args[i]);
// }

// const someVal = require('./math');
// console.log(someVal.sum(3,4));


// const info = require('./fruits');

// console.log(info[0].name);
// let figlet = require("figlet");

// figlet("M O M O ! ! ", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

// import {sum, sub} from "./math.js"

// console.log("sum : ", sum(2,4));
// console.log("sub : ", sub(2,4));

import { generate, count } from "random-words";
console.log(generate({ min: 3, max: 10 }));