const express  = require('express')
const router = express.Router()
const authJwt = require("../middleware/authJwt");

const reservationController = require('../controllers/reservation.controller')

//
//
//RESERVATION

//avoir les reservations par iduser
router.get('/',authJwt, reservationController.getReservation)


//avoir les reservations par iduser
router.get('/:iduser',authJwt, reservationController.getReservationByID)

//avoir les reservations par idreservation
router.get('/:idreservation',authJwt, reservationController.getReservationByIDr)

//avoir des nouvelles reservations
router.post('/',authJwt, reservationController.createNewReservation)

//MAJ reservation
router.put('/:idreservation',authJwt, reservationController.updateReservation)

//suppression reservation
router.delete('/:idreservation',authJwt, reservationController.deleteReservation)

//avoir toutes les reservations par etablissements par id
router.get('/idrestaurant/:',authJwt, reservationController.getReservationByIDe)


module.exports = router