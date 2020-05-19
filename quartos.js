//post

const fs = require('fs')
const data = require("./data.json")
exports.post = function(req, res) {

    const keys = Object.keys(req.body)

    for (key of keys) {

        if (req.body[key] == "") {
            return res.send('please, fill all fields')
        }
    }

    data.quartos.push(req.body)

    fs.writeFile("data.json",JSON.stringify(req.body),function(err){
        if(err) return res.send("erro")

        return res.redirect("/inscricao")
    } )

 //return res.send(req.body)

}


//update




//delete