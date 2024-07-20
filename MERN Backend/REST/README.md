# REST API 

Representational State Transfer 

- Rest is an architectural style that defines :
- set of constraints to be used for creating web services

## Restful API : 

The API used rules of REST

- used to perform CRUD operations (Create Update Dele)


## GET & POST request : 


| Get | Post  |
| --- | --- |
| Used to get some response  | used to post something (for create , write , update ) |
| Data sent in query strings (limited string data & visible in URL ) | Data send via request body (any type of data ) |
| To get from backend/database | to edit/alter the database |

```javascript
const express = require("express");
const app = express();
const port = 8080;

app.get("/register", (req, res)=>{
    let {user, password} = req.query;
    // name attribute in form is user which is used by backend to get response 
    res.send(`standard get response to ${user}`);
})

app.post("/register", (req, res)=>{
    res.send("standard post response");
})

app.listen(port, ()=>{
    console.log(`listening to ${port}`)
})
```

## Handling Post Request :

- Set up POST request route to get some response .
- Parse POST request data .

```javascript 
//Whenever we send data to our servers than it can not parse so we have to use middlewares. Middlewares can read url encoded data or json data so that req.body understand it 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
........................................................
app.post("/register", (req, res)=>{
    let {user, password} = req.body;
    res.send(`standard post response to ${user}`);
})
```

## CRUD operations :

1. GET : retrieve resources 
2. POST : submits new data to servers 
3. PUT : update existing data 
4. PATCH : update existing data partially 
5. DELETE : removes data .

>We build a simple [quora page](./Quora/README.md) for these CRUD operations .  