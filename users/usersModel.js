const db = require("./dbConfig")

function find() {
  return db('users')
}

function findById(id) {
  return db('users')
    .where({ id })
}

async function add(user) {
  const [id] = await db('users')
    .insert(user)

  return findById(id)
}

function remove(id) {
  return db('users')
    .where({ id })
    .del()
}

module.exports = {
  find,
  findById,
  add,
  remove
}