AUTHENTICATE USER BACKEND PROJECT [![CircleCI](https://dl.circleci.com/status-badge/img/gh/rlondon3/authenticate-user/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/rlondon3/authenticate-user/tree/main)
=======================================================
                          This is a Node/Express API for user authentication.

        • This is a backend project with unit testing in Jasmine and a CI Pipeline via CircleCI •
      
                                        DEVELOPMENT TECHNOLOGY
        Node.js| Express | Jasmine | MongoDB | JSON Webtoken | Supertest | Bcrypt | Dotenv 
 ___________________________________________________________________

OVERVIEW
---------------------------
## Create database and start the API server <br />
This project is running on localhost:5001.<br/>
2 Databases are used: One for development and the other for testing. <br/>
## Environment Variables:
<br/> 
PORT=5001 <br />
MONGODB='mongodb://localhost/your-db-name'<br />
SPEC_TEST_DB='mongodb://localhost/your-test-db-name'<br />
JWT_PRIVATE_KEY='your-private-key'<br />
ENV='your-env-name'<br />
*be sure to set in a .env file.

## Scripts:
<br>
npm run start- starts the node application with server.js<br />
npm run dev- starts the applicaton with nodemon for continuous development<br/>
npm run test- inits Jasmine to run unit test on the User Schema and User Routes
 

## End Points: 
- Create User <br />
In Postman create a JSON object to send to create a user: '/api/users' <br /> <br />
Required fields: <br />
{<br />
first_name: string <br /> 
last_name: string <br />
DOB: Date <br />
city: string <br />
state: string <br />
email: string <br />
password: string uniq (Uppercase, numeric, special character, minlengh: 8) <br />
subscription_active: bool <br />
} <br /> <br />
Expect return message to be a JSON object of the created user.

- JWT Authentication <br />
In Postman create a JSON object for logging in: '/api/auth' <br /> <br />
Required fields: <br />
{<br />
email: string <br />
password: string uniq (Uppercase, numeric, special character, minlengh: 8) <br />
} <br /> <br />
Status 200 will generate a JWT for Auth Header, 'x-auth-token'.<br />
Access headers in Postman to retrieve JWT.<br />

- Verify authentication token and user: '/api/users/me' <br />
Create value pair in Postman Headers tab <br /> <br />
Key Value Pair: <br />
x-auth-token: JWT<retrieved token> <br /> <br />
Expect return message to be a JSON object of the created user. <br />
## Docker Image Link: <br />
[https://hub.docker.com/repository/docker/rlondon3/auth-user-wci/general]
