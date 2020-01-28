const express = require('express');
const helmet = require('helmet');
const session = require('express-session');

const ApiRouter = require('./api-router.js');

const server = express();

const sessionConfiguration = {
    name: 'willThisWork',
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 5,
        secure: false,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: false
}

server.use(helmet());
server.use(express.json());
server.use(session(sessionConfiguration))

server.get('/', (req, res) => {
    res.send('<h2>Welcome To My First Auth Project</h2>')
});

server.use('/api', ApiRouter);

module.exports = server;