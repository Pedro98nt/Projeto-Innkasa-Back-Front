const express = require('express')
const routes = express.Router()
const pagina = require('./pagina')

routes.get('/', function(req,res){
    return res.render("login")
})

routes.get('/pagina', function(req,res){
    return res.render("pagina")
})

routes.get('/quartos', function(req,res){
    return res.render("quartos")
})

routes.get('/relatorio', function(req,res){
    return res.render("relatorio")
})
routes.get('/inscricao', function(req,res){
    return res.render("inscricao")
})

routes.post("/", pagina.post)

routes.post("/quartos", function(req,res){
    return res.send(req.body)
})

routes.post("/relatorio", function(req,res){
    return res.send(req.body)
})

routes.post("/inscricao", function(req,res){
    return res.send(req.body)
})




module.exports = routes