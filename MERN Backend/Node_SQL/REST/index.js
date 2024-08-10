const express  = require("express");
const app = express();
const port = 8080;
const mysql = require('mysql2');
const { faker } = require('@faker-js/faker');

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'rest',
    password:"Dev@1234"
  });

//  create fake data
let createRandomUser = ()=> {
    return [
       faker.string.uuid(),
       faker.internet.userName(),
       faker.internet.email(),
       faker.internet.password()
    ];
  };



  let data = [];
  for(let i=1;i<=100;i++){
    data.push(createRandomUser());
  }
  let q = "INSERT INTO user (id, name, email, password) VALUES ? ";
try{
    connection.query(q, [data] , (err, results, fields) => {
        if(err) throw err;
        console.log(results); // results contains rows returned by server
      }
    );
}catch(err){
    console.log(err);
}
 
// connect end 
connection.end();


app.listen(port,()=>{
    console.log("app is listening...");
})

app.get("/", (req,res)=>{
    res.send("<h1>Home page</h1>");
})