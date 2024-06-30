const express = require("express");
const app = express();
const { v4: uuidv4 } = require('uuid');

const port = 8080;
const path = require("path")

app.use(express.urlencoded({extended:true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username:"Harshit",
        age:21,
        gender:"Male",
        id : uuidv4()
    },
    {
        username:"Alok",
        age:19,
        gender:"not defined",
        id : uuidv4()
    },
    {
        username:"Ankita",
        age:20,
        gender:"Female",
        id :uuidv4()
    }
];

app.get("/posts", (req, res)=>{
    res.render("index.ejs", {posts});
})

app.get("/posts/new", (req,res)=>{
    res.render("new.ejs");
})
app.post("/posts", (req,res)=>{
    let {username,age,gender} = req.body;
    let id = uuidv4();
    posts.push({username,age,gender,id});
    res.redirect("/posts");
})
app.get("/posts/:id", (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id===p.id);
    res.render("show.ejs", {post});
})

app.listen(port, ()=>{
    console.log(`app is listening ${port}`);
})