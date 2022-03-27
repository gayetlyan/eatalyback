const mysql = require('mysql')




//creation de ma connnexion mysql 
const dbConn = mysql.createConnection({
    host  : 'eu-cdbr-west-02.cleardb.net',
    user : 'b1076e7d6cd4df',
    password : 'b28d2263',
    database : 'heroku_a2bdcf1d5d9b873',
    // socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
})



dbConn.connect(function(error){
    if(error) throw error
    console.log('Database Connected Succesfully !')
})






module.exports = dbConn
