const db = require('../data/db-config.js');

module.exports = {
    getUsers,
    createUser,
    findBy
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

function findBy(filter) {
    return db('users').select('id', 'username', 'password').where('username', filter).first();
}