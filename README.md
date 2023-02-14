AUTHENTICATE USER BACKEND PROJECT [![CircleCI](https://dl.circleci.com/status-badge/img/gh/rlondon3/authenticate-user/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/rlondon3/authenticate-user/tree/main)
=======================================================
                          This is a Node and Express API for user authentication.

        • This is a backend project with unit testing in Jasmine and a CI Pipeline via CircleCI •
      
                                        DEVELOPMENT TECHNOLOGY
        Node.js| Express | Jasmine | MongoDB | JSON Webtoken | Supertest | Bcrypt | Dotenv 
 ___________________________________________________________________

OVERVIEW
---------------------------
## Create database and start the API server. <br />
This project is running on localhost:5001.<br/>
2 Databases are used: One for development and the other for testing. <br/>
Mongo Databses: spec-auth-user; auth-user <br /><br/>
## Environment Variables
<br/> 
PORT=5001
MONGODB='mongodb://localhost/user-auth'
JWT_PRIVATE_KEY='AuthenticATEusER'
SPEC_TEST_DB='mongodb://localhost/spec-user-auth'
ENV='dev'<br />
*be sure to set in a .env file.

## Scripts:
<br>
npm run start- starts the node application with server.js<br />
npm run dev- starts the applicaton with nodemon for continuous development<br/>
npm run test- inits Jasmine to run unit test on the User Schema and User Routes
 

## END POINTS: 
- Create User <br />
In Postman create a JSON object to send to create a user. Send to: '/api/users' <br />
Required fields: <br />
{
first_name: string 
last_name: string
DOB: Date 
city: string
state: string
email: string
password: string uniq (Uppercase, numeric, special character, minlengh: 8)
subscription_active: bool
}
<br />
 
Expect return message to be a JSON object of the created user.

- JWT Authentication <br />
In Postman create a JSON object for logging in. Send to: '/api/auth' <br />
Required fields: <br />
{
email: string.
password: string uniq (Uppercase, numeric, special character, minlengh: 8)
} <br />
Status 200 will generate a JWT for Auth Header, 'x-auth-token'.<br />
Access headers in Postman to retrieve JWT.<br />

- Verify authentication token: Get the user. Send to: '/api/users/me' <br />
Create value pair in Postman Headers tab <br />
Key Value Pair:
x-auth-token: JWT<retrieved token>


