# Node.js 

## Introduction: 

- JavaScript runtime environment .
- Built on the Google V8 JavaScript engine and is open-source. 
- written in JavaScript, C++, Python, C 
-  used for server side programming .
- Install node from official site. Check : 
``` JavaScript 
node -v
```

## **Node-Specific Functionality :**

### **Global :**

- `module`  A module is a reusable piece of code that encapsulates related functionality. Modules allow you to organize your code into separate files, making it easier to manage and maintain large JavaScript applications. They help in keeping code clean, avoiding naming collisions, and promoting reusability.In Node, each file is treated as a module.
- `require()` is a function used to import modules from other files or Node packages.
- `process` is an object referencing the actual computer [process](https://en.wikipedia.org/wiki/Process_(computing)) running a Node program and allows for access to command-line arguments and much more.

### **Modules :**

Node has many built-in modules to aid in interactions with the command line, the computer file system, and the Internet. These include

- [HTTP](https://nodejs.org/dist/latest/docs/api/http.html) and [HTTPS](https://nodejs.org/dist/latest/docs/api/https.html) for creating web servers.
- [File System](https://nodejs.org/dist/latest/docs/api/fs.html), [OS](https://nodejs.org/dist/latest/docs/api/os.html), and [Path](https://nodejs.org/dist/latest/docs/api/path.html) for interacting with the file system, operating system, and file/directory paths.

## Process in Node :

The Object provide information about , and control over , the current Node.js process .

``` JavaScript 
process.argv 

returns an array containing the command - line arguments passed when the Node.js process was launched
``` 
in first 2 index of that array there is a location : 
1. where executable path of our code
2. path directory in which file is present 

### [ Import & Export in js ](./import&export) 
### [ Node Package Manager ](./npm)