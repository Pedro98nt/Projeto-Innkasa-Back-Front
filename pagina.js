//create
exports.post =  function(req,res){
        const Keys = Object.keys(req.body)
       
        for(key of keys){
    
        if(req.body[key] == "") 
         
        return res.send('please')  
        }
        return res.send(req.body)
     
    }

