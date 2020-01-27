const express = require('express');
const helmet = require('helmet');

const UserRouter = require('../users/users-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h2>Welcome To My First Auth Project</h2>')
});

server.use('/api', UserRouter);

module.exports = server;