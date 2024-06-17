// // function statement 
// function a(){
//     console.log("function statement")
// }

// // function expression
// var a = function(){
//     console.log("function expression")
// }

// // named - function - expression
// var a = function xyz(){
//     console.log("named - function - expression")
// }


// function xyz(){
//     let count = 0;
//     document.getElementById("clickMe")
//     .addEventListener('click', function call(){
//         console.log("callback called", ++count);
//     })
// }

// xyz();

// const user = [
//     {firstName:"Harhsit", lastName:"Garg", age:21},
//     {firstName:"Mohit", lastName:"Garg", age:19},
//     {firstName:"Ankit", lastName:"Kumar", age:21},
//     {firstName:"Udit", lastName:"Narayan", age:18},

// ]
   
// const output = user.reduce(function (acc, curr){
//     if(acc[curr.age]){
//         acc[curr.age]++;
//     }else{
//         acc[curr.age] = 1;
//     }
//     return acc
// }, {})


// console.log(output);

// const age = user.filter((x) => x.age<20).map((a)=>a.firstName)
// const age = user.reduce((acc, curr)=>{
//     if(curr.age<20){
//         acc.push(curr.firstName);
//     }
//     return acc;
// }, [])

// console.log(age)

// function add(...nums){
//     console.log(typeof nums);
//     return nums;
// }

// promises ......................................
