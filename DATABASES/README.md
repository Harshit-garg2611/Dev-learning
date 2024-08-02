# DATABASES 
This repository documents my learning process of databases technology as I delve into the backend development.

## Content

- [Introduction](#introduction)
  - [Why DATABASES](#why-databases)
  - [Difference between SQL and NO SQL](#difference-between-sql-and-no-sql)
- [Topics](#topics)
  - [Topic 1: SQL](#topic-1-sql)
- [Contributing](#contributing)
- [License](#license)

## Introduction

- Datbases : collection of data in a form that can be easily accessed .

### Why DATABASES :
- can store large data 
- features like security, scalability
- easy to insert, update, delete, search

-> Use When you need role-based access control and granular permissions to manage data access </br>
-> When you want to integrate your data with other tools through robust APIs. </br>
-> When you want to easily create relationships between datasets in different teams

## Difference between SQL and NO SQL

| SQL | NO SQL |
| --- | --- |
| Relational database (data stored in tables ) | Non- Relational database (data stores in documents , key-Val, graph etc. ) |
| e.g.  : MySQL , Oracle, PostgreSQL | e.g. : MongoDB , Cassandra , Neo4j  |

## DATABASE PARADIGMS : 

| Database Paradigm | Description | Popular Databases | Best Use Cases | Advantages | Disadvantages | Specification |
| --- | --- | --- | --- | --- | --- | --- |
| Key-Value DATABASE | Data stored as key-value pairs; very simple model. | Redis, DynamoDB,  | Caching, session storage, simple lookups | Extremely fast, scalable, simple design | Limited querying capabilities, no complex operations | In-memory (RAM) storage for rapid access |
| WIDE-Column | Data stored in columns rather than rows; optimized for read/write performance on large datasets. | Cassandra, HBase, Bigtable | Time-series data, analytics, write-heavy applications, History | High write and read performance, scalability | Complex setup and management, eventual consistency | Wide-column storage for efficient data retrieval |
| Document Stores / NoSQL Databases  | Data stored as documents (e.g., JSON, BSON). | MongoDB, CouchDB,  | Content management systems, Big data, real-time web apps           e-commerce applications, data with varying structures | Flexible schema, easy to scale, rich queries | Potential for data duplication, eventual consistency | Supports nested documents |
| Relational Databases (RDBMS) | Structured data stored in tables with rows and columns; uses SQL for querying. | MySQL, PostgreSQL, Oracle, SQL Server | Transactional systems, complex queries, data integrity, and consistency requirements | ACID compliance, strong data integrity, complex queries supported | Can be slower with large-scale datasets, less flexible schema | Supports JOIN operations for complex queries |
| Graph Databases | Data stored as nodes, edges, and properties; optimized for relationships. | Neo4j, DGRAPH, Arango DB | Social networks, recommendation engines, fraud detection | Efficient relationship traversal, flexible schema | Can be complex to scale, less suitable for simple data models | Optimized for graph traversal and queries |
| Time-Series Databases | Optimized for time-stamped or time-series data. | InfluxDB, TimescaleDB, OpenTSDB | IoT applications, monitoring systems, financial data | Efficient for time-series data, specialized functions | Limited general-purpose use, less mature ecosystem | Time-series data compression for storage efficiency |
| Object-Oriented Databases | Data stored as objects, similar to object-oriented programming. | db4o, ObjectDB, Versant Object Database | Applications with complex data relationships, CAD/CAM systems | Natural alignment with object-oriented programming, complex data relationships | Limited adoption, can be slower for simple queries | Object persistence with inheritance and polymorphism |
| Multi-Model Databases | Support multiple data models (e.g., document, graph, key-value). | ArangoDB, OrientDB, Cosmos DB | Applications needing multiple data models, flexible data storage requirements | Versatility, can handle various data types, reduces the need for multiple databases | Complexity in design and management, potential performance trade-offs | Supports multiple data models in one database |

## Topics 

### [Topic 1: SQL](./SQL/README.md)


## Contributing: 

Feel free to contribute to this repository by opening issues or submitting pull requests. All contributions are welcome!

## License: 

This project is licensed under the MIT License - see the [LICENSE](../LICENSE.txt) file for details.