const express  = require('express')
const router = express.Router()
const authJwt = require("../middleware/authJwt");
const restaurantController = require('../controllers/restaurant.controller')


//
//
//RESTAURANT

//avoir tous les restaurants
router.get('/',authJwt , restaurantController.getRestaurantList)

//avoir les restaurants par id
router.get('/:idrestaurant', restaurantController.getRestaurantByID)

//avoir les restaurants par nom
router.get('/:nom_restaurant', restaurantController.getRestaurantByNAME)

//avoir des nouveaux restaurants
router.post('/', restaurantController.createNewRestaurant)

//suppression restaurant par id
router.delete('/:idrestaurant', restaurantController.deleteRestaurant)

//suppression restaurant par nom
router.delete('/:nom_restaurant', restaurantController.deleteRestaurant2)


module.exports = router