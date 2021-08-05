// Update with your config settings.

module.exports = {

  development: {
    client: 'postgres',
    connection: {
      database: 'meubanco',
      user: 'postgres',
      password: 'ph33155137'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`,
    }
  },
};
