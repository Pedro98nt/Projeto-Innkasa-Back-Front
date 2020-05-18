const express = require('express')
const bodyParser = require('body-parser')
const nunjucks = require('nunjucks')
const routes = require("./routes")
const methodOverride = require('method-override')


const server = express()

server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(express.urlencoded({extended:true}))
server.use(express.json())
server.use(express.static('public'))
server.use(methodOverride('_method'))
server.use(routes) 



server.set("view engine", "html")

nunjucks.configure("views",{
    autoescape:false,
    express:server,
    noCache:true  
})

server.listen(5000, function(){
    console.log('server is running')
})

