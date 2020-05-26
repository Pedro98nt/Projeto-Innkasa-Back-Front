const express = require('express')
const routes = express.Router()
const quartos = require('./quartos')
const pagina = require('./pagina')
const login = require('./login')


routes.get('/', function (req, res) {
    return res.render("login")
})

routes.get('/pagina', function (req, res) {
    return res.render("pagina")
})

routes.get('/quartos', function (req, res) {
    return res.render("quartos")
})


routes.get('/produto', function(req,res){
    return res.render("produto")
})

routes.get('/relatorio', function (req, res) {
    return res.render("relatorio")
})
routes.get('/inscricao', function (req, res) {
    return res.render("inscricao")
})

//routes.get('/login/:id', login.show )

routes.post("/login", login.post)

routes.post("/pagina", pagina.post)

routes.post("/quartos", quartos.post )

routes.post("/relatorio", function (req, res) {
    return res.send(req.body)
})

routes.post("/inscricao", function (req, res) {
    return res.push(req.body)
    res.json({ status: 'User created successfully!' })
    
})




module.exports = routes