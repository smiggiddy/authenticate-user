const supertest = require('supertest');
const dotenv = require('dotenv');

const app = require('../../server');
const { userSchema } = require('../../models/user')

const request = supertest(app);

describe('User Schema', () => {
    it('should have a user schema', () => {
        expect(userSchema).toBeDefined();
    })
})

