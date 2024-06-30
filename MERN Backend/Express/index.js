// Use express 

// Step 1 : install npm package of express and update .json folder by npm init, Read documentation at npm 

// Step 2 : require express and make a call 

const express = require("express");
const app = express();

const port = 8080;

// Listen to request 

app.listen(port, ()=>{
    console.log("app is listening");
})

// after running the above file the port is start listening to our request once the file executed completely it will still listening to requests to stop it we have to press ctrl + c .

// Send response 

// app.use((req,res)=>{
//     let code = "<h1>First Response send to localhost</h1>"
//     // console.log("resopnse send ");
//     res.send(code);
// })

app.get("/", (req,res)=>{
    res.send("Root path");
})

app.get("/apple", (req, res)=>{
    res.send("Contact apple path");
})
app.get("/orange", (req, res)=>{
    res.send("Contact orange path");
})

// default path : any other path than above 
// app.get("*", (req, res)=>{
//    res.send("path does not exist");
// })


app.get("/:user/:id", (req,res)=>{
    let {user,id} = req.params;
    res.send(`User : ${user}  UserId: ${id}`)
})

app.get("/search", (req,res)=>{
    let { q } = req.query;  // deconstruct
    res.send(`Search result is ${q}`)
})