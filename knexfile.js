const sqlite = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: {
    directory: "./data/migrations",
  },
  seeds: {
    directory: "./data/seeds",
  },
  useNullAsDefault: true
}

module.exports = {

  dev: {
    ...sqlite,
    connection: {
      filename: './data/users.db3'
    }
  },

  test: {
    ...sqlite,
    connection: {
      filename: './data/usersTest.db3'
    }
  },

};
