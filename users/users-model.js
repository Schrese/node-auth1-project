const db = require('../data/db-config.js');

module.exports = {
    getUsers,
    createUser
}

function getUsers() {
    return db('users').select('id', 'username');
}

function findById(id) {
    return db('users').select('id', 'username').where({ id })
}

function createUser(user) {
    return db('users').insert(user, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id);
        })
}