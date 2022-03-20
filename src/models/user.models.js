var dbConn = require(('../../config/dbConfig'))

var User = function(user){
    this.email_user  = user.email_user
    this.password_user = user.password_user
    this.telephone_user = user.telephone_user
    this.is_admin = user.is_admin
    //this.status         =   user.status ? user.status : 1;
}


//all user
User.getAllUsers = (result)=>{
    dbConn.query('SELECT * FROM users', (err, res)=> {
        if(err){
            console.log('Error while fetching users', err)
            result(null, err)
        }
        else{
            console.log('Users fetched successfully')
            result(null, res)
        }
    })

}

//all user
User.getUserByEmail = (email,result)=>{
    dbConn.query('SELECT * FROM users where email_user = ?',[email], (err, res)=> {
        if(err){
            console.log('Error while fetching users', err)
            result(err ,null)
        }
        else{
            console.log('Users fetched successfully')
            result(null, res)
        }
    })

}


//user by ID
User.getUserByID = (iduser, result) =>{
    dbConn.query('SELECT * from users WHERE iduser=?', iduser, (err, res)=>{
        if(err){
            console.log('Error while fetching user by id ', err)
            result(null, err)
        }
        else{
            result(null, res)
        }
    })
}


//new user
User.createUser = (userReqData, result)=>{
    dbConn.query('INSERT INTO users SET ?', userReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data')
            result (null, err)
        }
        else{
            console.log('User created successfully')
            result(null, res)
        }
    })
}

//uptade user
User.updateUser = (iduser, userReqData, result)=>{
    dbConn.query("UPDATE users SET email_user=?, password_user=?, telephone_user=?, is_admin=? WHERE iduser=?", [userReqData.email_user, userReqData.password_user, userReqData.telephone_user, userReqData.is_admin, iduser], (err, res)=>{
        if(err){
            console.log('Error while uptading the user')
            result(null, err)
        }
        else{
            console.log('User update successfully')
            result(null, res)
        }
    })
}


//delete user
User.deleteUser = (iduser, result)=>{
    dbConn.query('DELETE FROM users WHERE iduser=?', [iduser], (err, res)=>{
        if(err){
            console.log('Error while deleting user')
            result(null, err)
        }
        else{
            result(null, res)
        }
    })
}

module.exports = User