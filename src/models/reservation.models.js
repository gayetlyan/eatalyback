var dbConn = require(('../../config/dbConfig'))

var Reservation = function(reservation){
    this.heure_date_reservation  = reservation.heure_date_reservation
    this.nombre_personne = reservation.nombre_personne
    this.iduser = reservation.iduser
    this.idrestaurant  = reservation.idrestaurant
}





//Reservation by IDuser
Reservation.getReservationByID = (iduser, result) =>{
    dbConn.query('SELECT * from reservations WHERE iduser=?', iduser, ()=>{
        if(err){
            console.log('Error while fetching reservation by iduser ', err)
            result(null, err)
        }
        else{
            result(null, err)
        }
    })
}




//Reservation by IDreservation
Reservation.getReservationByIDr = (idreservation, result) =>{
    dbConn.query('SELECT * from reservations WHERE idreservation=?', idreservation, ()=>{
        if(err){
            console.log('Error while fetching reservation by idreservation ', err)
            result(null, err)
        }
        else{
            result(null, err)
        }
    })
}

//creation Reservation
Reservation.createReservation = (reservationReqData, result)=>{
    dbConn.query('INSERT INTO reservations SET ?', reservationReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data')
            result (null, err)
        }
        else{
            console.log('Reservation created successfully')
            result(null, res)
        }
    })
}



//uptade Reservation
Reservation.updateReservation = (idreservation, reservationReqData, result)=>{
    dbConn.query("UPDATE reservations SET heure_date_reservation=?, nombre_personne=?, iduser=?, idrestaurant=?, status=? WHERE idreservation=?", [reservationReqData.heure_date_reservation, reservationReqData.nombre_personne, reservationReqData.iduser, reservationReqData.idrestaurant, reservationReqData.status, idreservation], (err, res)=>{
        if(err){
            console.log('Error while uptading the localite')
            result(null, err)
        }
        else{
            console.log('Localite uptade successfully')
            result(null, res)
        }
    })
}


//delete Reservation
Reservation.deleteReservation = (idreservation, result)=>{
    dbConn.query('DELETE FROM reservations WHERE idreservation=?', [idreservation], (err, res)=>{
        if(err){
            console.log('Error while deleting reservation')
            result(null, err)
        }
        else{
            result(null, res)
        }
    })
}


//toutes les Reservations par idRestaurant
Reservation.getReservationByIDe = (idrestaurant, result) =>{
    dbConn.query('SELECT * from reservations WHERE idreservation=?', idrestaurant, ()=>{
        if(err){
            console.log('Error while fetching reservation by idrestaurant ', err)
            result(null, err)
        }
        else{
            result(null, err)
        }
    })
}












module.exports = Reservation

