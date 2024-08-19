- SETTING UP express, uuid, faker, mysql2 packages 

# Routing : 

| Route  | /  | work | type |  what is doing|
| --- | --- | --- | --- | --- |
| GET | / |to fetch and show total no. of user in our app | view | retrieve  |
| GET | /user | fetch and show userId, name, email of all users | view | retrieve  |
| GET | /user/:id/edit | 2 steps : TO get form to edit a post this require password  | edit | edit route  |
| PATCH | /user/:id/ | 2 steps : edit username if correct password entered  | edit | update route  |

---