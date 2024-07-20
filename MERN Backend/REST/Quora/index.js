const express = require("express");
const app = express();
const port = 8080;

const { v4: uuidv4 } = require('uuid');

const path = require("path");


// override-package.....................
var methodOverride = require('method-override')
// override with POST having ?_method=DELETEorPATCH
app.use(methodOverride('_method'))

// to understand url-encoded data ................
app.use(express.urlencoded({ extended: true }));


app.set("view engine", "ejs");


// to run from anywhere 
app.set("views", path.join(__dirname, "views"))


// to serve static files 
app.use(express.static(path.join(__dirname, "public/CSS")))
app.use(express.static(path.join(__dirname, "public/JS")))


// listening to post 
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


//  to update a post ... similarily as edit in 2 steps 

// Step 1 : To get resopnse what to edit 
app.get("/posts/:id/edit", (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id===p.id);
    res.render("edit.ejs", {post});
})

// Step 2 : Patch request 
app.patch("/posts/:id", (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id===p.id);
    // find new edited tgough send by get request in form 
    let newContent = req.body.thought;
    // make thought of post to this new thought
    post.thought=newContent;
    res.redirect("/posts");
})


// to delet a post 
app.delete("/posts/:id", (req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=>id!=p.id); 
    res.redirect("/posts");
})