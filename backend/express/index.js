const express = require("express");
const app = express()
const port = 3000;


app.listen(port, ()=>{
    console.log("app is listening");
})
// this method send same request to all routes ................
// app.use((req, res)=>{
//     console.log(req)
//     console.log("request received")
// })

// this method send different request but repititive ..............
// app.get("/", (req, res)=>{
//     console.log("request received on root path")
//     res.send("Contact root path")
// })
// app.get("/apple", (req, res)=>{
//     console.log("request received on apple path")
//     res.send("Contact apple path")
// })
// app.get("/orange", (req, res)=>{
//     console.log("request received on orange path")
//     res.send("Contact orange path")
// })
// app.get("*", (req,res)=>{
//     console.log("request received on defult path");
//     res.send("contact default path")
// })
// request params ...................
app.get("/:username/:id", (req,res)=>{
    let {username, id} = req.params;
    res.send(`Welcome ${username} with id ${id}`)
})

app.get("/search", (req,res)=>{
    let {q} = req.query;
    if(!q){
        res.send("nothing found")
    }
    res.send(`response for ${q}`)
})
