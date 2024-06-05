class CreateUser {
    //  To set the property we use constructor function 
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // here we can define the functions and it will directly set to it's prototype property 
    getBirthYear(){
        return new Date().getFullYear() - this.age;
    }

}

const user1 = new CreateUser("Harsh", "garg", 21);
const user2 = new CreateUser("Mohit", "garg", 19);