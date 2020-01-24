
exports.up = async function(knex) {
  await knex.schema.createTable('users', tbl => {
    tbl.increments()
    tbl.text('username', 32).unique().notNullable()
    tbl.text('password').notNullable()
    tbl.text('department').notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('users')
};
