const ReservationModel = require('../models/reservation.models')


//recuperer les reservations par IDuser
exports.getReservationByID = (req, res) =>{
    //console.log('get user by id')
    console.log(req.params.iduser);
    ReservationModel.getReservationByID(req.params.iduser, (err, reservation)=>{
        if(err){
            console.log(err); 
            res.send(err)
        } else {
            console.log('single reservation data', reservation)
            res.send(reservation)
        }
        
    })
}




//avoir la liste des reservations par idreservation
exports.getReservationByIDr = (req, res) =>{
    //console.log('get user by id')
    console.log(req.params.idreservation);
    ReservationModel.getReservationByIDr(req.params.idreservation, (err, reservation)=>{
        if(err){
            console.log(err); 
            res.send(err)
        } else {
            console.log('single reservation data', reservation)
            res.send(reservation)
        }
        
    })
}




//creation de reservation
exports.createNewReservation = (req, res)=>{
    const reservationReqData = new ReservationModel(req.body)
    console.log('reservationReqData', reservationReqData)
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length == 0){
        res.status(400).send({success : false, message : 'please fill all fields' })
    }
    else{
        ReservationModel.createReservation(reservationReqData, (err, reservation)=>{
            if(err){
                res.send(err)
            }
            else{
                res.json({status: true, message: 'Reservation created successfully', data: reservation.insertId})
            }
            
        })
    }
}




//update reservation
exports.updateReservation = (req, res)=>{
    const reservationReqData = new ReservationModel(req.body)
    console.log('reservationReqData update', reservationReqData)
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length == 0){
        res.status(400).send({success : false, message : 'please fill all fields' })
    }
    else{
        ReservationModel.updateReservation(req.params.idreservation, reservationReqData, (err, reservation)=>{
            if(err){
                res.send(err)
            }
            else{
                res.json({status: true, message: 'Reservation update successfully'})
            }
            
        })
    }
}




//supprimer reservation
exports.deleteReservation = (req, res)=>{
    ReservationModel.deleteReservation(req.params.idreservation, (err, reservations)=>{
        if(err){
            res.send(err)
        }
        else{
            res.json({success: true, message: 'Reservation deleted successfully !'})
        }
        
    })
}




//recuperer les reservations par IDrestaurant
exports.getReservationByIDe = (req, res) =>{
    //console.log('get user by id')
    console.log(req.params.idrestaurant);
    ReservationModel.getReservationByIDe(req.params.idrestaurant, (err, reservation)=>{
        if(err){
            console.log(err); 
            res.send(err)
        } else {
            console.log('single reservation data', reservation)
            res.send(reservation)
        }
        
    })
}






