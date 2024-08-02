# SQL (STRUCTURED QUERY LANGUAGE) 
> Programming language used to interact with databases 
- Uses CRUD operations to interact with databases . 
- case insensitive 

## Schema (design) : 

Schema or design generally refers to the logical level data that shows how data is organised and relationship b/w tables 

> Rows : tuple (information of single entity).

# Common My SQL Queries : 
>  Order of exuction is from RIGHT to LEFT 

## Database Query : 
```SQL
-- creation of database 
CREATE DATABASE db_name ; 
-- we generally write IF NOT EXISTS 
CREATE DATABASE IF NOT EXISTS db_name ;
```

### Delete DATABASE : 
```SQL
-- to delete a data base
DROP DATABASE db_name ;  
DROP DATABASE IF EXISTS db_name ;
```

- We have to do intialization before using any database : 
```SQL
USE db_name; 
-- To see all databases present at a time 
SHOW DATABASES;
```

## Table Query : 

### Create table : 
```SQL
USE db_name ; -- initialization to use the database to create table in
CREATE TABLE table_name (
column_name1 , datatype, constraint,
column_name2 , datatype, constraint,
column_name3 , datatype, constraint
);
```
> constraints : rule we define on our data 
### Select commands : 
```SQL
-- To show all the tables inside a database don't forget to use database
SHOW TABLES ;
-- To see all the data inside a table 
SELECT * FROM table_name;
-- * -> all 
SELECT col1,col2 FROM table_name;

-- We can also use distinct keyword before col name to show only distinct values.
SELECT DISTINCT col1 FROM table_name;
```