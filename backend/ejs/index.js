const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

// app.use(express.static("public"))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))
// app.use(express.static(path.join(__dirname, "/public/style.css")))
app.use(express.static(path.join(__dirname, "/public")))


app.get("/", (req, res) => {
    console.log("request received");
    res.render("index")
})

app.get("/hello", (req, res) => {
    res.send(`<h1>Hello route</h1`);
})

app.get("/rollDice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rollDice", {diceVal})
})
app.get("/ig/:username", (req,res)=>{
    const instaData = require("./data.json")
    let {username} = req.params;
    // console.log(instaData[username].posts[0])
    res.render("insta", {data : instaData[username]})
})



app.listen(port, () => {
    console.log("app is listening");
})

