const RestaurantModel = require('../models/restaurant.models')



//avoir la liste des restaurants
exports.getRestaurantList = (req, res)=>{
    //console.log('here all restaurants list')
    RestaurantModel.getAllRestaurants((err, restaurants) =>{
          console.log('We are here')
         if (err){
         res.send(err)
         }
         else{
         console.log('Restaurants', restaurants)
         res.send(restaurants)
         }
     })
}

//recuperer les restaurants par ID
exports.getRestaurantByID = (req, res) =>{
    //console.log('get restaurant by id')
    console.log(req.params.idrestaurant);
    RestaurantModel.getRestaurantByID(req.params.idrestaurant, (err, restaurant)=>{
        if(err){
            console.log(err); 
            res.send(err)
        } else {
            console.log('single restaurant data', restaurant)
            res.send(restaurant)
        }
        
    })
}

//recuperer les restaurants par nom
exports.getRestaurantByNAME = (req, res) =>{
    //console.log('get restaurant by id')
    console.log(req.params.nom_restaurant);
    RestaurantModel.getRestaurantByNAME(req.params.nom_restaurant, (err, restaurant)=>{
        if(err){
            console.log(err); 
            res.send(err)
        } else {
            console.log('single restaurant data', restaurant)
            res.send(restaurant)
        }
        
    })
}

//creation de restaurant
exports.createNewRestaurant = (req, res)=>{
    const restaurantReqData = new RestaurantModel(req.body)
    console.log('restaurantReqData', restaurantReqData)
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length == 0){
        res.status(400).send({success : false, message : 'please fill all fields' })
    }
    else{
        RestaurantModel.createRestaurant(restaurantReqData, (err, restaurant)=>{
            if(err){
                res.send(err)
            }
            else{
                res.json({status: true, message: 'Restaurant created successfully', data: restaurant.insertId})
            }
            
        })
    }
}




//supprimer restaurant
exports.deleteRestaurant = (req, res)=>{
    RestaurantModel.deleteRestaurant(req.params.idrestaurant, (err, restaurants)=>{
        if(err){
            res.send(err)
        }
        else{
            res.json({success: true, message: 'Restaurant deleted successfully !'})
 
        }
    })   
}

//supprimer restaurant
exports.deleteRestaurant2 = (req, res)=>{
    RestaurantModel.deleteRestaurant2(req.params.nom_restaurant, (err, restaurants)=>{
        if(err){
            res.send(err)
        }
        else{
            res.json({success: true, message: 'Restaurant deleted successfully !'})
        }
        
    })
}