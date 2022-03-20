var dbConn = require(('../../config/dbConfig'))

var Restaurant = function(restaurant){
    this.nom_restaurant  = restaurant.nom_restaurant
    this.email_restaurant = restaurant.email_restaurant
    this.telephone_restaurant = restaurant.telephone_restaurant
    this.idmenu  = restaurant.idmenu
    this.idlocalite  = restaurant.idlocalite
}



//all restaurant
Restaurant.getAllRestaurants = (result)=>{
    dbConn.query('SELECT * FROM restaurants', (err, res)=> {
        if(err){
            console.log('Error while fetching restaurants', err)
            result(null, err)
        }
        else{
            console.log('Restaurants fetched successfully')
            result(null, res)
        }
    })

}


//restaurant by ID
Restaurant.getRestaurantByID = (idrestaurant, result) =>{
    dbConn.query('SELECT * from restaurants WHERE idrestaurant=?', idrestaurant, (err, res)=>{
        if(err){
            console.log('Error while fetching restaurant by id ', err)
            result(null, err)
        }
        else{
            result(null, res)
        }
    })
}


//restaurant by name
Restaurant.getRestaurantByNAME = (nom_restaurant, result) =>{
    dbConn.query('SELECT * from restaurants WHERE nom_restaurant=?', nom_restaurant, (err, res)=>{
        if(err){
            console.log('Error while fetching restaurant by name ', err)
            result(null, err)
        }
        else{
            result(null, res)
        }
    })
}


//new restaurant
Restaurant.createRestaurant = (restaurantReqData, result)=>{
    dbConn.query('INSERT INTO restaurants SET ?', restaurantReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data')
            result (null, err)
        }
        else{
            console.log('Restaurant created successfully')
            result(null, res)
        }
    })
}



//delete restaurant par id
Restaurant.deleteRestaurant = (idrestaurant, result)=>{
    dbConn.query('DELETE FROM restaurants WHERE idrestaurant=?', [idrestaurant], (err, res)=>{
        if(err){
            console.log('Error while deleting restaurant')
            result(null, err)
        }
        else{
            result(null, res)
        }
    })
}


//delete restaurant par nom
Restaurant.deleteRestaurant2 = (nom_restaurant, result)=>{
    dbConn.query('DELETE FROM restaurants WHERE nom_restaurant=?', [nom_restaurant], (err, res)=>{
        if(err){
            console.log('Error while deleting restaurant')
            result(null, err)
        }
        else{
            result(null, res)
        }
    })
}



module.exports = Restaurant



