const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const DateExtension = require('@joi/date');
const JoiImport = require('joi');
const Joi = JoiImport.extend(DateExtension);
const PasswordComplexity = require("joi-password-complexity");


const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    last_name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50 
    },
    DOB: {
        type: Date,
        required: true
    },
    city: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    state: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 2
    },
    email: {
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: false, // makes sure two users do not have the same email when set to true
    },
    password: { 
        type: String, 
        required: true,
     },
     subscription_active: Boolean,
});

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id, subscription_active: this.subscription_active }, process.env.JWT_PRIVATE_KEY);
    return token;
}

const User = mongoose.model('User', userSchema);

function handleErrors(user) {
    const schema = Joi.object({
        first_name: Joi.string().min(3).max(50),
        last_name: Joi.string().min(3).max(50),
        DOB: Joi.date().format('YYYY-MM-DD').raw(),
        city: Joi.string().min(3).max(50).required(),
        state: Joi.string().max(2).required(),
        email: Joi.string().email({ tlds: {allow: false} }),
        password:  new PasswordComplexity({
        min: 8,
        max: 25,
        lowerCase: 1,
        upperCase: 1,
        numeric: 1,
        symbol: 1,
        requirementCount: 4
    }),     
        subscription_active: Joi.boolean().required()
    });

    return schema.validate(user);
}

exports.User = User;
exports.userSchema = userSchema;
exports.handleErrors = handleErrors;