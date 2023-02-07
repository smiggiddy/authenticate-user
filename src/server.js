const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const users = require('./routes/users');

dotenv.config();
mongoose.set('strictQuery', false) //Deprecation coming in Mongo 7

const port = process.env.PORT || 5002;
const app = express();

if (!process.env.JWT_PRIVATE_KEY) {
    console.error('Fatal Error: JWT is not defined.');
    process.exit(1);
};

process.env.ENV === 'dev' ?
    mongoose.connect(process.env.MONGODB)
    .then(() => console.log('Connected to the User Authentication Database...'))
    .catch((err) => console.error(`Could not connect to the database: ${err}`) )
:
process.env.ENV.trim() === 'test' ? 
    mongoose.connect(process.env.SPEC_TEST_DB)
    .then(() => console.log('Connected to the User Spec Test Authentication Database...'))
    .catch((err) => console.error(`Could not connect to the database: ${err}`) )
:
console.error('Not connected to a database!');

//Enable Body Parse
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enable Cors
app.use(cors());

//User Route
app.use('/api/users', users);
app.use('/api/auth', auth);

const server = app.listen(port, () => console.log(`Server started on port ${port}`));

app.get('/', (req, res) => {
    res.send('User Authentication Backend')
});

module.exports = server;