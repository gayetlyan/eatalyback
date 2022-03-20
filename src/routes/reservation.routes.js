const express  = require('express')
const router = express.Router()

const reservationController = require('../controllers/reservation.controller')

//
//
//RESERVATION

//avoir les reservations par iduser
router.get('/:iduser', reservationController.getReservationByID)

//avoir les reservations par idreservation
router.get('/:idreservation', reservationController.getReservationByIDr)

//avoir des nouvelles reservations
router.post('/', reservationController.createNewReservation)

//MAJ reservation
router.put('/:idreservation', reservationController.updateReservation)

//suppression reservation
router.delete('/:idreservation', reservationController.deleteReservation)

//avoir toutes les reservations par etablissements par id
router.get('/idrestaurant/:', reservationController.getReservationByIDe)


module.exports = router