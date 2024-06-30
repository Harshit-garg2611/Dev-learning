# Express JS 

A Node.js framework that helps us to make web applications . It is used for server side programming .

1. listen incoming request 
2. parse that request 
3. match response with routes (after / , the path )
4. response send. 

> npm package  

## Ports :

These are the logical endpoints of a network connection that is used to exchange information between a web server and client

## Step 1 : listen to request 
``` JavaScript
app.listen(port,function());
```
// after running the above file the port is start listening to our request once the file executed completely it will still listening to requests to stop it we have to press ctrl + c .

>To send the request in local machine write localhost: ← port name → on browser , make sure the port is running .    

## Step 2 :  Sending response 
``` JavaScript 
app.use((req,res)=>{
    console.log("response send");
})
```
// this method listens to all type of request and run a call back function. After this we have confirmed that after request is receiving . 

### Sending a response  :

We see 2 objects in detail 

1. request object 
2. response object

whenever we send API request i.e. ;  the http request we send is , text based . express make this text based request into object (by parsing)
```JavaScript
app.use((req, res)=>{
    console.log(req)
    console.log("request received")
    // res.send('this is basic response')
    res.send({
        name : "harshit",
        gender : "male"
    })
})
```
>We can also send Html resopnse to it 

## Routing : 
It is process of selecting a path for traffic in a network or between or across multiple network. 

>If we use (app.use method) than it send request of all path to same thing . To make different call to different paths we use app.get() method .
```Javascript
app.get(path, callback [, callback ...])
```
>'/' (root path) .

We can always send only single response to a path . we can’t send two responses on the same path 
>In path if we use * than it is default path , any other requested path that is not declared will redirect to this path .
```Javascript
app.get("*", (req, res)=>{
   res.send("path does not exist");
})
```


## Nodemon :

In order to automatically restart a server after a particular change , we install Nodemon npm package 

- npm install -g nodemon .
- npm link nodemon

## Path Parameters :

To go on different paths in a real website there are lot of pages so , we pass a variable that act as a path param.
```JavaScript 
app.get("/:username/:id", (req, res)=>{
    console.log(req.params);
    res.send("variable path is called")
})

//  in above .params make a object storing the username and id as object and 
// the passing variable as a value .
// storing this variable we use :

app.get("/:username/:id", (req, res)=>{
  let {username, id} = req.params;
    res.send(`Welcome ${username} your id is ${id}`);
})
```


## Query Strings : 
```JavaScript
app.get('/search', (req,res)=>{
    console.log(req.query);
    res.send("<h1>Success</h1>");
})

// sending request 
localhost:3000/search?q="harshit"
// in console
{ q: '"harshit"' } 


// multiple query strings 
localhost:3000/search?q=harshit&q=garg
// in console it make object of array
{ q: [ 'harshit', 'garg' ] }
```
