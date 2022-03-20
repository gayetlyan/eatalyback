var dbConn = require(('../../config/dbConfig'))

var Localite = function(localite){
    this.rue_restaurant  = localite.rue_restaurant
    this.numero_restaurant = localite.numero_restaurant
    this.code_postal_restaurant = localite.code_postal_restaurant
    this.ville_restaurant  = localite.ville_restaurant
}


//all Localite
Localite.getAllLocalites = (result)=>{
    dbConn.query('SELECT * FROM localites', (err, res)=> {
        if(err){
            console.log('Error while fetching localites', err)
            result(null, err)
        }
        else{
            console.log('Localites fetched successfully')
            result(null, res)
        }
    })

}


//Localite by ID
Localite.getLocaliteByID = (idLocalite, result) =>{
    dbConn.query('SELECT * from localites WHERE idLocalite=?', idLocalite, (err, res)=>{
        if(err){
            console.log('Error while fetching localite by id ', err)
            result(null, err)
        }
        else{
            result(null, res)
        }
    })
}


//new Localite
Localite.createLocalite = (localiteReqData, result)=>{
    dbConn.query('INSERT INTO localites SET ?', localiteReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data')
            result (null, err)
        }
        else{
            console.log('Localite created successfully')
            result(null, res)
        }
    })
}



//delete Localite
Localite.deleteLocalite = (idLocalite, result)=>{
    dbConn.query('DELETE FROM localites WHERE idLocalite=?', [idLocalite], (err, res)=>{
        if(err){
            console.log('Error while deleting localite')
            result(null, err)
        }
        else{
            result(null, res)
        }
    })
}

module.exports = Localite