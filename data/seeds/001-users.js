
exports.seed = knex => {
  return knex('users').truncate()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'gerard007', password: '111213', department: 'design'},
        {id: 2, username: 'badandboojee', password: '69696969', department: 'customer service'},
        {id: 3, username: 'lambdaizmysheet', password: '1001001', department: 'development'},
        {id: 4, username: 'DBsRkewl', password: '987123', department: 'development'},
        {id: 5, username: 'FreddyJackson', password: '111213', department: 'development'},
      ]);
    });
};
