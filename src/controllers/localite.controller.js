const LocaliteModel = require('../models/localite.models')



//avoir la liste des Localites
exports.getLocaliteList = (req, res)=>{
    //console.log('here all Localite list')
    LocaliteModel.getAllLocalites((err, localites) =>{
          console.log('We are here')
         if (err){
            res.send(err)
         }
         else{
            console.log('Localites', localites)
            res.send(localites)
         }
         
     })
}

//recuperer les Localites par ID
exports.getLocaliteByID = (req, res) =>{
    //console.log('get Localite by id')
    LocaliteModel.getLocaliteByID(req.params.idLocalite, (err, localite)=>{
        if(err){
            res.send(err)
        }
        else{
            console.log('single localite data', localite)
            res.send(localite)
        }
        
    })
}

//creation de Localite
exports.createNewLocalite = (req, res)=>{
    const localiteReqData = new LocaliteModel(req.body)
    console.log('localiteReqData', localiteReqData)
    //check null
    if(req.body.constructor === Object && Object(req.body).length == 0){
        res.status(400).send({success : false, message : 'please fill all fields' })
    }
    else{
        LocaliteModel.createLocalite(localiteReqData, (err, localite)=>{
            if(err){
                res.send(err)
            }
            else{
                res.json({status: true, message: 'Localite created successfully', data: localite.insertId})
            }
            
        })
    }
}


//supprimer Localite
exports.deleteLocalite = (req, res)=>{
    LocaliteModel.deleteLocalite(req.params.idLocalite, (err, localite)=>{
        if(err){
            res.send(err)
        }
        else{
            res.json({success: true, message: 'Localite deleted successfully !'})
        }
        
    })
}
