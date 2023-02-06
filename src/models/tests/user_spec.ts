import { mongo } from "mongoose";

const server = require('../../server')
const supertest = require('supertest');
const dotenv = require('dotenv');
const { User } = require('../../models/user');
const usersRoute = require('../../routes/users');
const authUsers = require('../../middleware/auth');
const authRoute = require('../../routes/auth');

dotenv.config();
process.env.ENV = 'test';
const request = supertest(server);

describe('User Schema', () => {
    it('should have a user schema', () => {
        expect(User).toBeDefined();
    });
})

describe('Test user routes', () => {
    let token;
    it('should POST a new user', async () => {
        const res = await request
        .post('/api/users')
        .send({
            first_name:"Test",
            last_name: "McTester",
            DOB: "1991-01-01",
            city: "Testius" ,
            state:"TE",
            email: "test@gmail.com",
            password: "Test1234!",
            subscription_active: false
        })
        .set('Accepted', 'application/json');
        console.log(res.status, res.text)
        token = 'Bearer ' + res.body;
        expect(res.status).toEqual(200);
    });
    it('POST should be able to signin', async () => {
        const res = await request
        .post('/api/auth')
        .send({
            email: "rlondon3@gmail.com",
            password: "Test1234!"
        })
        .set('Accepted', 'application/json');
        console.log(res.status, res.text, res.body);
        expect(res.status).toEqual(200);
    });
    it('DELETE should remove user', async () => {
        const res = await request
        .delete('')
    })
})

