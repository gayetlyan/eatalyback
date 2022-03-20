const CarteModel = require('../models/carte.models')



//avoir la liste des menus
exports.getCarteList = (req, res)=>{
    //console.log('here all restaurants list')
    CarteModel.getAllCartes((err, cartes) =>{
          console.log('We are here')
         if (err){
        res.send(err)
         }
         else{
         console.log('Cartes', cartes)
         res.send(cartes)
         }
     })
}

//recuperer les menus par ID
exports.getCarteByID = (req, res) =>{
    console.log(req.params.idMenu);
    CarteModel.getCarteByID(req.params.idMenu, (err, carte)=>{
        if(err){
            res.send(err)
        } else {
            console.log('single carte data', carte)
            res.send(carte)
        }
        
    })
}

//recuperer les menus par nom
exports.getCarteByNAME = (req, res) =>{
    console.log(req.params.nom_menu);
    CarteModel.getCarteByNAME(req.params.nom_menu, (err, carte)=>{
        if(err){
            res.send(err)
        } else {
            console.log('single carte data', carte)
            res.send(carte)
        }
        
    })
}


//recuperer les menus par categorie
exports.getCarteByCategorie = (req, res) =>{
    console.log(req.params.categorie);
    CarteModel.getCarteByCategorie(req.params.categorie, (err, carte)=>{
        if(err){
            res.send(err)
        } else {
            console.log('single carte data', carte)
            res.send(carte)
        }
        
    })
}



//uptade carte
exports.updateCarte = (req, res)=>{
    const carteReqData = new CarteModel(req.body)
    console.log('carteReqData uptade', carteReqData)
    //check null
    if(req.body.constructor === Object && Object(req.body).length == 0){
        res.status(400).send({success : false, message : 'please fill all fields' })
    }
    else{
        CarteModel.updateCarte(req.params.idMenu, carteReqData, (err, carte)=>{
            if(err){
                res.send(err)
            }
            else{
                res.json({status: true, message: 'Carte update successfully'})
            }
        })
    }
}

//creation de menus
exports.createNewCarte = (req, res)=>{
    const carteReqData = new CarteModel(req.body)
    console.log('carteReqData', carteReqData)
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length == 0){
        res.status(400).send({success : false, message : 'please fill all fields' })
    }
    else{
        CarteModel.createCarte(carteReqData, (err, carte)=>{
            if(err){
                res.send(err)
            }
            else{
                res.json({status: true, message: 'Carte created successfully', data: carte.insertId})
            }
            
        })
    }
}




//supprimer menus
exports.deleteCarte = (req, res)=>{
    CarteModel.deleteCarte(req.params.idMenu, (err, cartes)=>{
        if(err){
            res.send(err)
        }
        else{
            res.json({success: true, message: 'Carte deleted successfully !'})
        }
        
    })
}