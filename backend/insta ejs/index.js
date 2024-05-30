const express = require("express");
const path = require("path")
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// app.use(express.static("public"))
app.use(express.static(path.join(__dirname, "/public/CSS")))
app.use(express.static(path.join(__dirname, "/public/JS")))

app.get("/ig/:username", (req, res)=>{
    const {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username]
    // console.log(data.posts[0].image);
    res.render("insta.ejs", {data})
})

app.listen(port, ()=>{
    console.log(`listen to ${port}`);
})

