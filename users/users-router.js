const bc = require('bcryptjs');

const express = require('express');

const Users = require('./users-model.js');

const router = express.Router();

router.get('/users', (req, res, next) => {
    
    if(req.headers.password && req.headers.username) {
        bc.hash(req.headers.password, 10, (err, hash) => {
            if (err) {
                console.log('error getting users', err)
                res.status(500).json({ errorMessage: 'What happened?' })
            } else {
                Users.getUsers()
                    .then(users => {
                        res.status(200).json(users)
                    })
                    .catch(err => {
                        console.log('could not get users', err)
                        res.status(500).json({ errorMessage: 'Could not retreive users' })
                    })
            }
        })
    } else {
        res.status(400).json({ errorMessage: 'Please provide credentials' })
    }
    
})

module.exports = router;