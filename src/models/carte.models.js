var dbConn = require(('../../config/dbConfig'))


var Carte = function(carte){
    this.categorie = carte.categorie
    this.nom_menu  = carte.nom_menu
    this.composition_menu = carte.composition_menu
    this.prix_menu = carte.prix_menu
}

//all menus
Carte.getAllCartes = (result)=>{
    dbConn.query('SELECT * FROM cartes', (err, res)=> {
        if(err){
            console.log('Error while fetching cartes', err)
            result(null, err)
        }
        else{
            console.log('Cartes fetched successfully')
            result(null, res)
        }
    })

}


//menu by ID
Carte.getCarteByID = (idMenu, result) =>{
    dbConn.query('SELECT * from cartes WHERE idMenu=?', idMenu, (err, res)=>{
        if(err){
            console.log('Error while fetching carte by id ', err)
            result(null, err)
        }
        else{
            result(null, res)
        }
    })
}



//menu by name
Carte.getCarteByName = (nom_menu, result) =>{
    dbConn.query('SELECT * from cartes WHERE nom_menu=?', nom_menu, (err, res)=>{
        if(err){
            console.log('Error while fetching carte by name ', err)
            result(null, err)
        }
        else{
            result(null, res)
        }
    })
}


//menu by categorie
Carte.getCarteByCategorie = (categorie, result) =>{
    dbConn.query('SELECT * from cartes WHERE categorie=?', categorie, (err, res)=>{
        if(err){
            console.log('Error while fetching carte by categorie ', err)
            result(null, err)
        }
        else{
            result(null, res)
        }
    })
}



//new menu
Carte.createCarte = (carteReqData, result)=>{
    dbConn.query('INSERT INTO cartes SET ?', carteReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data')
            result (null, err)
        }
        else{
            console.log('Carte created successfully')
            result(null, res)
        }
    })
}

//uptade carte
Carte.updateCarte = (idMenu, carteReqData, result)=>{
    
    dbConn.query("UPDATE cartes SET categorie=?, nom_menu=?, composition_menu=?, prix_menu=? WHERE idMenu=?", [carteReqData.categorie, carteReqData.nom_menu, carteReqData.composition_menu, carteReqData.prix_menu, idMenu], (err, res)=>{
        if(err){
            console.log('Error while uptading the carte')
            result(null, err)
        }
        else{
            console.log('Carte update successfully')
            result(null, res)
            //ok
        }
    })
}


//delete menu
Carte.deleteCarte = (idMenu, result)=>{
    dbConn.query('DELETE FROM cartes WHERE idMenu=?', [idMenu], (err, res)=>{
        if(err){
            console.log('Error while deleting carte')
            result(null, err)
        }
        else{
            result(null, res)
        }
    })
}

module.exports = Carte