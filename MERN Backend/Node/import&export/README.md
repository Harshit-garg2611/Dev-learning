# Export in JavaScript Files 

Node.js supports CommonJS Modules and ECMAScript Modules.
> Note : in our project either we can import everything or we can require everything don’t use both .
## [CommonJS Modules](./common%20module): 
- module.exports : It is a object 
> Remember : It always exports as an object 
and require(); 
``` 
// suppose in math.js there are different functions, we have to use in the index.js file
module.exports -> math.js
require("path") -> index.js
```
In case where the file does not exports anything still we require it . It will print empty object. 
```
We can directly use module.exports.property or exports.property 
```

## [ ES6 modules ](./ES6%20module)
- exports and import 

```
To use we should declare type="module" either in npm package or in html file connected tag. 
```
### Why type="module"

- All the variables goes in Module Scope . Global scope do not pollute
- It itself create defer
- It also enable strict mode 

## Difference b/w CommonJS Modules & ES6 Modules  


| Feature                       | CommonJS Modules                             | ES6 Modules                                     |
|-------------------------------|----------------------------------------------|-------------------------------------------------|
| **Usage**                     | Primarily in Node.js                         | Modern browsers, Node.js (with transpilation)   |
| **Module Loading**            | Synchronous                                  | Asynchronous                                    |
| **Exporting**                 | `module.exports = ...`                       | `export` and `export default` keywords          |
| **Importing**                 | `const module = require('module');`          | `import module from 'module';`                  |
| **Default Exports**           | Not directly supported                       | Supported with `export default`                 |
| **Scope**                     | Creates new scope per `require()`            | Lexical scoping (read-only imports)             |
| **Loading Time**              | Synchronous loading                          | Asynchronous loading                            | 
| **Dependency Graph**          | Resolved at runtime                          | Resolved at compile-time (supports tree-shaking)|
| **Mutable Exports**           | Yes                                          | No (read-only imports)                          |
| **Example**                   | `const fs = require('fs');`                  | `import fs from 'fs.js';`                       |

> We can’t selectively load only the pieces we need with require but with import , we can selectively load only the pieces we need, which can save memory . 

## Difference b/w require() &  import 


| Feature                     | `require()`                                     | `import`                                       |
|-----------------------------|-------------------------------------------------|------------------------------------------------|
| **Syntax**                  | `const module = require('module');`             | `import module from 'module.js';`               |
| **Loading Time**            | Synchronous                                    | Asynchronous                                   |
| **Default Exports**         | Not applicable (no default export concept)      | Supports default exports (`import module from 'module';`) |
| **Scope**                   | Creates new scope per `require()`              | Lexical scoping (read-only imports)            |
| **Dependency Graph**        | Resolved at runtime                            | Resolved at compile-time (supports tree-shaking)|
| **Mutable Exports**         | Yes                                             | No (read-only imports)                         |
| **Usage**                   | Node.js                                         | Modern browsers, Node.js (with transpilation)  |
