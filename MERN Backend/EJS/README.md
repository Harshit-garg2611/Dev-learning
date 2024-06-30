# Embedded JAVASCRIPT Templates : 

Templating :  client side data binding method.

It is a simple templating language which helps you to generate HTML markup with plain JavaScript . 

## Start working with EJS
1. npm init 
2. install express 
3. install ejs package 
4. basic set up of index.js file … require express app.listen()

>Note : We don’t have to require ejs separately internally express require itself . 

view → template , View engines allow us to render web pages using template files. 
Set view engine to ejs 
```JavaScript
app.set("view engine", "ejs");
```

> In get request we don’t send responses but we `render` the responses in form of ejs file 
- we make a directory named views by default :
- view engine expected to be present ejs file in views directory and our express tried to find this views folder. 
```JavaScript
app.get("/", (req, res)=>{
    console.log("request received");
    res.render("home.ejs") 
    // here we don't have to mention directory by default express go to views directory and search for our file . 
    // in this if we also don't put.ejs at end it will work fine because express see on the basis of file name . 
})
```
>Should install EJS language supporter extension to highlight the syntax of ejs file in VS code . 

> [!NOTE]
> We can run our file from backend directory also nodemon EJS/index.js , but if we render some file than it will look up for views directory inside the backend directory . To make resolve this we have to set it , so that express look up for views directory only in the EJSdir .

```javascript
const path = require("path");

app.set("views", path.join(__dirname, "/views"))
// path is a package by default with express, we have to require it
```

What it does is , It sets the path of our ejs files into views dir. only 

# Interpolation syntax :

Interpolation refers to embedding expressions into marked up text . 

- by using EJS we make our HTML page dynamic .

` <%= Outputs the value into the template (escaped) %> `
```JavaScript
<h3> <%= 'harshit'.toUpperCase() %></h3>
// above tag convert the javascript output into string than it is treated as string in html 

//eg: 
// insta dynamic page
app.get("/ig/:username", (req,res)=>{
    let {username} = req.params;
    res.render("insta", {username})
})
```

## Parsing data : 
In above we parse the data with render by ussing comma ,

## Conditional statements and loops :
<% `Scriptlet` tag, for control-flow, no output %> 

same tag used in loops in JS parts 


## Serving Static files :

to include various files CSS files , JS files we use this 

```JavaScript
app.use(express.static("folderName"))
```
>Here express.static(folderName) is middleware . 
```JavaScript
// as views in ejs file, same  public folder in css 
app.use(express.static("public"))
// to make default path join we use this 
app.use(express.static(path.join(__dirname, "/public/CSS")))
app.use(express.static(path.join(__dirname, "/public/JS")))
// we can serve multiple directory to organized the work .
// here we are accesssing directory not file
```

## Includes :

• `<%-` Outputs the unescaped value into the template `%>`

way to create sub templates . 

unescaped value : complete html code rather than escaping into string .

The use when to render various page and same head in html than make dir. ‘includes’ inside views dir. and make a file head.ejs inside includes.

can also use in footer 

can use on the sections of html page where same section of a page is present on different pages

>where to use add this statement
```JAVASCRIPT
<%- include("includes/head.ejs") %>
```

>[!Note]
>remember not to use /includes