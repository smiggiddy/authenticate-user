AUTHENTICATE USER BACKEND PROJECT [![CircleCI](https://dl.circleci.com/status-badge/img/gh/rlondon3/authenticate-user/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/rlondon3/authenticate-user/tree/main)
=======================================================
                          This is a Node and Express API for user authentication.

        • This is a backend project with unit testing in Jasmine and a CI Pipeline via CircleCI •
      
                                        DEVELOPMENT TECHNOLOGY
        Node.js| Express | Jasmine | MongoDB | JSON Webtoken | Supertest | Bcrypt | Dotenv 
 ___________________________________________________________________

OVERVIEW
---------------------------
Create database and start the API server. This project is running on localhost:5001.
• **_MONGO DB_**
•**_2 Databases are used:_**One for development and the other for testing. 
  <br/>Databses: <br/> spec-auth-user; auth-user;
Below are the environmental variables that needs to be set in a .env file:
<br/> *Note that the values are not the same as the provided examples given above. 

PORT=5001
MONGODB='mongodb://localhost/user-auth'
JWT_PRIVATE_KEY='AuthenticATEusER'
SPEC_TEST_DB='mongodb://localhost/spec-user-auth'
ENV='dev'<br />

Below are the available scripts for the API:
<br>
npm run start- starts the node application with server.js<br />
npm run dev- starts the applicaton with nodemon for continuous development<br/>
npm run test- inits Jasmine to run unit test on the User Schema and User Routes
 



# END POINTS 
## Create User<br />
In Postman create a JSON object to send to create a user. Send to: '/api/users' <br />
Required fields:
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
This is a user signup(create a user). 
Expect return message to be a JSON object of the created user.

## JWT AUTHENTICATION ENDPOINTS
In post create a JSON object for logging in. Send to: '/api/auth' <br />
Required fields:
{
email: string.
password: string uniq (Uppercase, numeric, special character, minlengh: 8)
}
This will authenticate a user.
Status 200 will generate a JWT for Auth Header, 'x-auth-token'.<br />
Access headers in Postman to retrieve JWT.<br />

Verify authentication token by getting the user. Send to: '/api/users/me' <br />
Create value pair in Postman Headers tab<br />
Key Value Pair:
x-auth-token: JWT<retrieved token>


