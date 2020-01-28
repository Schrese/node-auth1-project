const express = require('express');
const helmet = require('helmet');
const session = require('express-session');

const ApiRouter = require('./api-router.js');

const server = express();

// const sessionConfiguration = {
    
// }

server.use(helmet());
server.use(express.json());
// server.use(session(sessionConfiguration));

server.get('/', (req, res) => {
    res.send('<h2>Welcome To My First Auth Project</h2>')
});

server.use('/api', ApiRouter);

module.exports = server;