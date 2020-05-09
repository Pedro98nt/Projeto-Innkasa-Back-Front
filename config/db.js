const {Pool } = require("pg")

module.exports = new Pool({
    user:'pedro',
    password:"980705",
    host:"localhost",
    port:5432,
    database:"innkasa"

})