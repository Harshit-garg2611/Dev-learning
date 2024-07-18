const express = require("express");
const app = express();
const port = 8080;

const { v4: uuidv4 } = require('uuid');

const path = require("path");


// to understand url-encoded data 
app.use(express.urlencoded({ extended: true }))


app.set("view engine", "ejs");


// to run from anywhere 
app.set("views", path.join(__dirname, "views"))


// to serve static files 
app.use(express.static(path.join(__dirname, "public/CSS")))
app.use(express.static(path.join(__dirname, "public/JS")))

app.listen(port, () => {
    console.log(`listening ${port} .....`)
})

// post array 
let posts = [
    { userName: "Harshit Garg", age: 21, gender: "Male", thought: "Pain of discipline is better", id:uuidv4() },
    { userName: "Atul", age: 19, gender: "Male", thought: "Enjoy the life !", id:uuidv4() },
    { userName: "Ankita", age: 21, gender: "Male", thought: "Don't take stress too much", id:uuidv4() },
    { userName: "Ariz", age: 20, gender: "Male", thought: "Hula la la ", id:uuidv4() },
    { userName: "Yashika", age: 22, gender: "Female", thought: "Love yourself! " , id:uuidv4()}
]

// get request to show all post

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
})


// to add new post 

// first get resopnse from user

app.get("/posts/new", (req,res)=>{
    res.render("new.ejs");
})

// second post response 

app.post("/posts", (req,res)=>{
    let {userName,age,gender,thought} = req.body;
    let id = uuidv4();
    posts.push({userName,age,gender,thought,id})
    res.redirect("/posts")
})

// to go to specific post page 
app.get("/posts/:id", (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id===p.id);
    res.render("show.ejs", { post });
})


//  to update a post 
app.get("/posts/:id/edit", (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id===p.id);
    res.render("edit.ejs", {post});
})