// const min = prompt("Enter min. no");
// const max = prompt("Enter max. no: ");
// console.log("write quit to end ! ");
// const output = Math.floor(Math.random() * (max))+1;
// let guess = (prompt("guess the number"));
// while (true) {
//     if(guess=="quit"){
//         break;
//     }
//     if (guess == output) {
//         confirm("You guess the right no.");
//         break;
//     } else {
//         if(guess<output){
//            guess = prompt("enter large");
//         }else{
//             guess = prompt("enter small");
            
//         }
//     }
    
// }
// function outer(){
//     let x = 4;
//     let y = 5;
//     function inner(){
//         console.log(x);
//         console.log(y);
//     }
//     inner();
// }
// let array = [3,5,7,7,1];
// array.push("5");
// array.unshift(5);
function createUser(firstName,lastName,email,age) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.about= function(){
        return `${this.firstName}, ${this.lastName} is ${this.age}`
    }
    return user;
};
const user1 = createUser("Harshit","Garg","hgaygs",21);
console.log(user1);
console.log(user1.about());

