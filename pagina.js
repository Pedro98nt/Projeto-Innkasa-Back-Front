
const data = require("./data.json")

const pagina = function(req,res){

}
module.exports={
    
}

exports.post =  function(req,res){
        const Keys = Object.keys(req.body)
       
        for(key of keys){
    
        if(req.body[key] == "") 
         
        return res.send('please')  
        }

        req.body.id=Number(data.pagina.length+1)
   
        data.pagina.push(req.body)


        fs.writeFile("data.json", JSON.stringify(data, null), function(err){
            if(err) return res.send("write file error!")
            return res.redirect("/quartos")
        })
   
       // return res.send(req.body)
     
    }


