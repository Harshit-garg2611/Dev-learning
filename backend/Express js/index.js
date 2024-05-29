//  this file now act as a server : express 
const express = require('express');
const app = express();

// console.dir(app);
let port = 3000;

app.listen(port, ()=>{
    console.log("app is listening ", port);
})

// app.use((req, res)=>{
//     console.log("request received")
//     res.send({
//         "name" : "Harhsit",
//         "age" : 21
//     })
// })

// app.get("/", (req, res)=>{
//     res.send("Contact root path");
// })
// app.get("/apple", (req, res)=>{
//     res.send("Contact apple path");
// })
// app.get("/orange", (req, res)=>{
//     res.send("Contact orange path");
// })
// app.get("*", (req, res)=>{
//     res.send("path doesn't exist");
//  })
// app.get("/:username/:id", (req, res)=>{
//     console.log(req.params);
//     res.send("variable path is called")
// })


// app.get("/:username/:id", (req, res)=>{
//   let {username, id} = req.params;
//     res.send(`Welcome ${username} your id is ${id}`);
// })

// query strings ...................
// app.get('/search', (req,res)=>{
//     console.log(req.query);
//     res.send("<h1>Success</h1>");
// })
app.get('/search', (req,res)=>{
    let {q} = req.query;
    res.send(`<h1>Success</h1><p>Search result for query is ${q}`);
})