const express  = require("express");
const app = express();
const port = 8080;
const mysql = require('mysql2');
const { faker } = require('@faker-js/faker');
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// to serve static files 
app.use(express.static(path.join(__dirname, "public/CSS")))
app.use(express.static(path.join(__dirname, "public/JS")))

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



  // let data = [];
  // for(let i=1;i<=100;i++){
  //   data.push(createRandomUser());
  // }
//   let q = "INSERT INTO user (id, name, email, password) VALUES ? ";
// try{
//     connection.query(q, [data] , (err, results, fields) => {
//         if(err) throw err;
//         console.log(results); // results contains rows returned by server
//       }
//     );
// }catch(err){
//     console.log(err);
// }
 
// connect end 
// connection.end();

// routing ................

// home route 
app.get("/", (req,res)=>{
  let q = `SELECT count(*) From user`;
  try{
      connection.query(q,  (err, results, fields) => {
          if(err) throw err;
          // console.log(results[0]["count(*)"]); // results contains rows returned by server
          let count = results[0]["count(*)"];
        res.render("home", {count});
        }
      );
  }catch(err){
      console.log(err);
      res.send("error");
  }
})
// we don't need connection.end here bcos it automatically ends whenever get method ends in above .

// show route 
app.get("/user", (req,res)=>{
  let q = `SELECT * FROM user`;
  try{
      connection.query(q,  (err, results, fields) => {
          if(err) throw err;
          // console.log(results); // results contains rows returned by server 
          res.render("show", { results })
        }
      );
  }catch(err){
      console.log(err);
  }
})

// edit route 
app.get("/user/:id/edit", (req,res)=>{
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try{
        connection.query(q, (err, results, fields) => {
            if(err) throw err;
            // console.log(results); // results contains rows returned by server
            let user = results[0];
            res.render("edit", {user})
          }
        );
    }catch(err){
        console.log(err);
    }
})


app.listen(port,()=>{
    console.log("app is listening...");
})