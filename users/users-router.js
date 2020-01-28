const express = require('express');

const Users = require('./users-model.js');

const router = express.Router();
 
router.get('/', (req, res) => {
    Users.getUsers()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            console.log('error getting users', err)
            res.status(500).json({ errorMessage: 'Could not get users' })
        })
})

module.exports = router;