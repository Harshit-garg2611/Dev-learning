# Node Package Manager 

- The default package manager for JavaScript's runtime Node.js.
- imagine as the library for packages .  (that library from which we can install packages )
- command line tool (through which we can use packages )

## NPM consists of two main parts:

- CLI (command-line interface) tool for publishing and downloading packages
- an online repository that hosts JavaScript packages .
```
## Installing packages :

npm install <- package name ->
```
## node_modules : 

The node modules folder contains every installed dependency for our project .

## package.json 

It contains descriptive and functional meta data about a project such as name, version and dependencies . 

## package-lock.json

It records the exact version of every install dependency , including it’s sub - dependencies and their version . 

> If we delete our node modules than to regain it we just simply run a cmd npm install . It will install all modules , dependencies present in .json file .   

## OWN package.json 

- npm init 

if we use - y flag than all the parameters set to default for our project .

## Local v/s Global installation : 

- to install packages globally we use `-g` flag after npm install .

`npm install -g < - package name - >`

firstly we have to give permission as administrator to install this in mac or Linux . 

```jsx
sudo chown -R $USER/usr/local/lib/node_modules
```

- before using we have to link it

`npm link < - package name - >`

## Library v/s Framework :

| Library  | Framework  |
| --- | --- |
| A library is a set of pre written code that can be used to perform a specific task .  e.g. : axios  | A framework is a set of pre written code that provides structure for developing software application e.g. : express  |

---