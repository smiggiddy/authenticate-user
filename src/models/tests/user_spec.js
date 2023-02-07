const server = require('../../server')
const supertest = require('supertest');
const dotenv = require('dotenv');
const { User, userSchema } = require('../user');

dotenv.config();
process.env.ENV = 'test';
const request = supertest(server);

describe('User Schema', () => {
    it('Schema should have a user model', () => {
        expect(User).toBeDefined();
    });
    it('Schema should have a first name', () => {
        expect(userSchema.tree.first_name).toBeDefined();
    })
    it('Schema should have a last name', () => {
        expect(userSchema.tree.last_name).toBeDefined();
    })
    it('Schema should have a DOB', () => {
        expect(userSchema.tree.DOB).toBeDefined();
    })
    it('Schema should have a city', () => {
        expect(userSchema.tree.city).toBeDefined();
    })
    it('Schema should have a state', () => {
        expect(userSchema.tree.state).toBeDefined();
    })
    it('Schema should have an email', () => {
        expect(userSchema.tree.email).toBeDefined();
    })
    it('Schema should have a password', () => {
        expect(userSchema.tree.password).toBeDefined();
    })
    it('Schema should have a subscription', () => {
        expect(userSchema.tree.subscription_active).toBeDefined();
    })
    
    it('Schema should have an authentication method', () => {
        expect(userSchema.methods.generateAuthToken).toBeDefined();
    })
})

describe('Test user routes: POST, GET, AUTH, PUT, DELETE', () => {
    let token;
    let userId;
    it('(POST) should create a new user based on schema', async () => {
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

        userId = res._body._id;
        
        expect(res.status).toEqual(200);
    });
    it('(AUTH) should allow user to signin with schema authentication method', async () => {
        const res = await request
        .post('/api/auth')
        .send({
            email: "test@gmail.com",
            password: "Test1234!"
        })
        .set('Accepted', 'application/json');

        token = res.text;

        expect(res.status).toEqual(200);
        
    });
    it('(GET) should return the logged in user using an auth token', async () => {
        const res = await request
        .get('/api/users/me')
        .set('x-auth-token', token)
        .set('Accepted', 'application/json');

        expect(res.body.email).toEqual("test@gmail.com");

        expect(res.status).toBe(200);
    })
    it('(AUTH) should fail with invalid creditentials', async () => {
        const res = await request
        .post('/api/auth')
        .send({
            email: "test@gmail.com",
            password: "Test12345!"
        })
        .set('Accepted', 'application/json');

        expect(res.status).toBe(400);
    })
    it('(PUT) should update the user', async () => {
        const res = await request
        .put(`/api/users/${userId}`)
        .send({
            first_name:"Testy",
            last_name: "McTesterson",
            DOB: "1991-01-01",
            city: "Testius" ,
            state:"TE",
            email: "test@gmail.com",
            password: "Test4321!",
            subscription_active: true
        })
        .set('x-auth-token', token)
        .set('Accepted', 'application/json');

        expect(res.status).toBe(200);
    })
    it('(DELETE) should remove the user', async () => {
        const res = await request
        .delete(`/api/users/${userId}`)
        .set('x-auth-token', token)
        .set('Accepted', 'application/json');

        expect(res.status).toBe(200);
        
        const getRes = await request
        .get('/api/users/me')
        .set('x-auth-token', token)
        .set('Accepted', 'application/json');

        expect(getRes.body).toEqual({ })
    })
    
})

