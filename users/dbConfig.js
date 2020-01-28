const knex = require("knex")

const config = require("../knexfile")

const environment = process.env.NODE_ENV || "dev"

const db = knex(config[environment])

module.exports = db