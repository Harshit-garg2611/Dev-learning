# REST API 

In this repo I built a Simple Quora page that has following features :

1. Show all posts to an index route . 
  - Post contains :
     - userName, Age , Gender, His Thoughts.   
2. Has a button where we can add a new post .
3. specific button on a post to :
   - see complete post 
   - edit a post 
   - to delete a particular post  

## Creating restful API :

| GET  | /posts  | to get data for all posts  | index |  retrieve resources |
| --- | --- | --- | --- | --- |
| POST | /posts | to add a new post | create | submits new data to servers  |
| GET | /posts/:id | to get one post using id | view | retrieve  |
| PUT / PATCH | /posts/:id | to update specific post  | update | update existing data / partially  |
| DELETE | /posts/:id | to delete specific post | destroy  | removes data . |

---

## STEP 1 : [BASIC SETUP](index.js) 
- require express & ejs
- app.listen
- require path : 
   - set view engine to ejs 
   - set views to default path by path.join
   - serve static files (JS, CSS )by use app.use 
   - read url encoded data by app.use 

## Step 2 : API to get request to show all post

I create an array posts for now, but all the post comes from backend 

## Step 3 : API to add new posts 
 - Done in 2 steps 
 1. Get response in form 
 2. post response 
[![](https://mermaid.ink/img/pako:eNpNjz0LgzAQhv_KcbMK7ehQUEMnoQWli3EI5vwAYyQmSBH_e6Pt0O25533h7jZstCSMsTNi7qFkfAKApHoNtEKS5_B8FGUNYXiDtMoMCUsw0VoftfTUWXWJ4K6N-nOsukYw68WeLvu6A9mJCQaoyCgxSL95OwKOtidFHGOPklrhRsuRT7uvCmd18Z4ajK1xFKDRrusxbsW4-MnN0h_FBuE_UD-7fwBnH0Gf?type=png)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNpNjz0LgzAQhv_KcbMK7ehQUEMnoQWli3EI5vwAYyQmSBH_e6Pt0O25533h7jZstCSMsTNi7qFkfAKApHoNtEKS5_B8FGUNYXiDtMoMCUsw0VoftfTUWXWJ4K6N-nOsukYw68WeLvu6A9mJCQaoyCgxSL95OwKOtidFHGOPklrhRsuRT7uvCmd18Z4ajK1xFKDRrusxbsW4-MnN0h_FBuE_UD-7fwBnH0Gf)
## Step 4 : API to get a complete post page 
First we have to assign id to all post for that we use uuid package .
- Make a API with variable params /posts/:id . 
- destrcuture { id } with req.params
- now from post array find the post having id & render the show page with post 

## Step 5 : PATCH : API to update a specific post 
we can also use PUT request here 
- first create edit page same as that of add new post page 

>In HTML we can only send get or post request , override it by npm package 
