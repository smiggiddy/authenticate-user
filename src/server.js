const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const users = require('./routes/users');

const port = process.env.PORT || 5002;
const app = express();

if (!process.env.JWT_PRIVATE_KEY) {
    console.error('Fatal Error: JWT is not defined.');
    process.exit(1);
};

mongoose.connect(process.env.MONGODB)
.then(() => console.log('Connected to the User Authentication Database...'))
.catch((err) => console.error(`Could not connect to the database: ${err}`) )

//Enable Body Parse
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enable Cors
app.use(cors());

//User Route
app.use('/api/users', users);
app.use('/api/auth', auth);

app.listen(port, () => console.log(`Server started on port ${port}`));
app.get('/', (req, res) => {
    res.send('User Authentication Backend')
});

exports.app = app;