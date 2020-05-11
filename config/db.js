const {Pool} = require("pg")


module.exports = new Pool({
    user= "postgres",
    password:"980705",
    host:"localhost",
    port:5432,
    database:"innkasa"
})