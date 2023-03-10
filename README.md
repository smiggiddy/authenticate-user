AUTHENTICATE USER BACKEND PROJECT [![CircleCI](https://dl.circleci.com/status-badge/img/gh/rlondon3/authenticate-user/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/rlondon3/authenticate-user/tree/main)
=======================================================
                          This is a Node/Express API for user authentication.

        • This is a backend project with unit testing in Jasmine and a CI Pipeline via CircleCI •
      
                                        DEVELOPMENT TECHNOLOGY
        Node.js| Express | Jasmine | MongoDB | JSON Webtoken | Supertest | Bcrypt | Dotenv 
 ___________________________________________________________________

# OVERVIEW
---------------------------
## Create database and start the API server  
This project will run on `localhost:5001`   
2 Databases are used: One for development and the other for testing.  
*SET* Environment Variables:
```   
PORT=5001 
MONGODB='mongodb://localhost/your-db-name'
SPEC_TEST_DB='mongodb://localhost/your-test-db-name'
JWT_PRIVATE_KEY='your-private-key'
ENV='your-env-name'
```
_*be sure to set in a .env file._  

## Scripts:
<br>
`npm run start` - starts the node application with server.js
`npm run dev` - starts the applicaton with nodemon for continuous development<br/>
`npm run test` - inits Jasmine to run unit test on the User Schema and User Routes
 

## End Points: 
Create a user account via API endpoint.  
Useing postman or cURL to create a JSON object to send to create a user: `/api/users` 
Required fields:  
```json
{
  "first_name": "John", 
  "last_name": "Doe",
  "DOB": "2023/01/01",
  "city": "Atlanta", 
  "state": "Georgia",
  "email": "rlondon3@github.com",
  "password": "Password123#!",   
  "subscription_active": "True"
}
```
Password requirements `(Uppercase, numeric, special character, minlengh: 8)`
Expect return message to be a JSON object of the newly created user.

- JWT Authentication 
In Postman create a JSON object for logging in: `/api/auth` 
Required fields: 
```json
{
  "email": "rlondon3@github.com",
  "password": "Password1234!"
} 
```
Status 200 will generate a JWT for Auth Header, 'x-auth-token'.  
Access headers in Postman to retrieve JWT.  

- Verify authentication token and user: `api/users/me` 
Create value pair in Postman Headers tab   
Key Value Pair:   
`x-auth-token: JWT<retrieved token>`   
Expect return message to be a JSON object of the created user.  

## Docker Image Link: 
[https://hub.docker.com/repository/docker/rlondon3/auth-user-wci/general]
