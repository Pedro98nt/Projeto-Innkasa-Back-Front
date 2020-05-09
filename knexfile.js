// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database:"innkasa",
      user:"postgres",
      password:"980705"
    },
    migrations:{
      tableName:'innkasa',
      directory:`${ __dirname }/config/db/migrations`
    }
  }
};
