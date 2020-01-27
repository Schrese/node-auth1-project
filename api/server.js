const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h2>Welcome To My First Auth Project</h2>')
})

module.exports = server;