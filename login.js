const fs = require('fs')
const data = require("./data.json")

exports.post = function (req, res) { 
     //req.body.email
    // req.body.senha
     //res.send("Email:"+req.body.email+"Senha: "+req.body.senha)

    const keys = Object.keys(req.body)

    for (key of keys) {

        if (req.body[key] == "") {
            return res.send('please, fill all fields')
        }
    }
    //req.body.birth = Date.parse(req.body.birth)
    //req.body.create_at = Date.now()
    req.body.id = Number(data.login.length+1)
    

    data.login.push(req.body)
    fs.writeFile("data.json",JSON.stringify(data, null, 2),function(err){
        if(err) return res.send("erro")

        return res.redirect("/pagina")  
        
    } ) 

}


//update 




//delete