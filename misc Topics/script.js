// const user = {
//     firstName : "Harhsit",
//     lastName : "Garg",
//     age : 21,
//     getBirthYear(){
//         return new Date().getFullYear() - this.age;
//     }
// }




// function createUser(firstName, lastName, age){
//     const user = {
//         firstName,
//         lastName,
//         age,
//          getBirthYear : createUser.commonMethods.getBirthYear
//     }
//     return user;
// }

// createUser.commonMethods = {
//     getBirthYear(){
//         return new Date().getFullYear() - this.age;
//     }
// }
// const user1 =  createUser("Harsh", "garg", 21);
// const user2 =  createUser("Mohit", "garg", 19);


// constructor function 
function createUser(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

createUser.prototype.getBirthYear  = function(){
    return new Date().getFullYear() - this.age;
}


const user1 = new createUser("Harsh", "garg", 21);
const user2 = new createUser("Mohit", "garg", 19);