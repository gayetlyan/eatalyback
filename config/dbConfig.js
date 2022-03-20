const mysql = require('mysql')




//creation de ma connnexion mysql 
const dbConn = mysql.createConnection({
    host  : 'localhost',
    user : 'root',
    password : 'root',
    database : 'eatalie',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
})

dbConn.connect(function(error){
    if(error) throw error
    console.log('Database Connected Succesfully !')
})






module.exports = dbConn
