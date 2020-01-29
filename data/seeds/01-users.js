
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Picard', password: 'enterprise'},
        {id: 2, username: 'Riker', password: 'minuet'},
        {id: 3, username: 'Data', password: 'spot'}
      ]);
    });
};
