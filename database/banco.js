const {Pool} = require("pg")


module.exports = new Pool ({
    user: 'Pedro',
    password: "980705",
    host : "localhost",
    port : 5432,
    database:"innkasa"
})
pg.Promise = global.Promise
