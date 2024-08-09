// require faker
const { faker } = require('@faker-js/faker');


// require mysql2 package 
// Get the client
const mysql = require('mysql2');


// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'my_app',
  password: 'Dev@1234'
});

// we write query here : 
let q = "INSERT INTO user (id, name, email, password) VALUES ? ";
// array to store values 
// let array = ["121123", "123_newUser223", "abc@gmail.comxsa", "2431h2121ah"]

//  to use this connection we use query method : 
//  we write this query method in try and catch block 
let getRandomUser = ()=> {
  return [
     faker.string.uuid(),
     faker.internet.userName(),
    faker.internet.email(),
     faker.internet.password(),
  ];
};

let data = [];
for(let i=1;i<=100;i++){
  data.push(getRandomUser());
}

try{
  connection.query(q, [data], (err, results,field)=>{
    if(err) throw err;
    console.log(results);  // it prints an array of objects 
    // console.log(field);
  })
} catch(err){
  console.log(err);
}

// to close the connection 
connection.end();

// generate random id, username, email & password using faker package 
// let getRandomUser = ()=> {
//     return {
//       id: faker.string.uuid(),
//       name: faker.internet.userName(),
//       email: faker.internet.email(),
//       password: faker.internet.password(),
//     };
//   };

  // console.log(getRandomUser());