const fs = require('fs')
exports.post =function (req, res) {

    const keys = Object.keys(req.body)

    for (key of keys) {

        if (req.body[key] == "") {
            return res.send('please, fill all fields')
        }
    }

    data.pagina.push(req.body)
    fs.writeFile("data.json",JSON.stringify(data, null, 2),function(err){
        if(err) return res.send("erro")

        return res.redirect("/quartos")
        
    } )

 //return res.send(req.body)

}


//update 




//delete