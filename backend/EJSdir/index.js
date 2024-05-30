const express = require("express");
const app = express();
const path = require("path");

const port  = 8080;
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"))
app.get("/html", (req, res)=>{
    console.log("request received");
    res.render("home.ejs")
})

app.get("/", (req,res)=>{
    res.send("home");
})

app.get("/rolldice", (req, res)=>{
    let diceVal = Math.floor(Math.random() * 6 )+1 ; 
    res.render("rollDice", {diceVal})
})

app.listen(port, ()=>{
    console.log(`listening.. on ${port}`);
})