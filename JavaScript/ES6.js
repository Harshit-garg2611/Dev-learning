// Spread operator 
const nums1 = [4,5,6,7,8]
const nums2 = [-2,-4,-5,-1,-5,9,6,2]
const myName = "Harshit"

const nums = [...nums1, ...nums2, ...myName];
// output : [4, 5, 6, 7, 8, -2, -4, -5, -1, -5, 9, 6, 2, 'H', 'a', 'r', 's', 'h', 'i', 't']

// for object 
const user = {
    name: "Harsh",
    age : 21,
    address(){
        city:"banglore"
        state:"Karnataka"
    }
}

// to copy object and also to add a new key : value 
const updated = {...user, city:"Panipat"}


// destructuring 
// const {name, age} = user;

// if we tried to destructure a property that is not present it give undefined 
//  to set a variable name to our own 
const {name:username, age} = user;
// it gives us a name from user object and sets variable name username and assign the value of key name to username 
// basically username became a variable 

// to destructure the function inside object 
// const {address} = user;
// it gives object address that has key - value pair as that of function

const {address : {city, state}} = user; 