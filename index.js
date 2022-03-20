require('dotenv').config()
const express = require ('express')
const bodyParser = require('body-parser')
// const jwt = require('jsonwebtoken')

// process.env.ACCESS_TOKEN_SECRET
//const loginRoutes = require('./loginRoutes').router




//creer l'app express
const app = express()

//app.use(cors())

//server
const port = process.env.PORT || 5200

//parse request data content type application/x-ww-form-rulencoded
app.use(bodyParser.urlencoded({extended: false}))



//parse request data content type application/json
app.use(bodyParser.json())

//root
app.get('/', (req, res)=> {
    res.send('Hello world')
})




// require('./app/routes/auth.routes')(app);



//import des utilisateurs routes
const userRoutes = require('./src/routes/user.routes')


//import des restaurants routes
const restaurantRoutes = require('./src/routes/restaurant.routes')


//import des reservations routes
const reservationRoutes = require('./src/routes/reservation.routes')


//import des localités routes
const localiteRoutes = require('./src/routes/localite.routes')


//import des cartes routes
const carteRoutes = require('./src/routes/carte.routes')

// //import des logins
// const loginRoutes = require('./src/routes/login.routes')





//creation des users
app.use('/api/v1/user', userRoutes)

//creation des restaurants
app.use('/api/v1/restaurant', restaurantRoutes)

//creation des reservations
app.use('/api/v1/reservation', reservationRoutes)

//creation des localites
app.use('/api/v1/localite', localiteRoutes)

//creation des cartes
app.use('/api/v1/carte', carteRoutes)

// //creation des logins
// app.use('/api/v1/login', loginRoutes)




// function generateAccessToken(userRoutes){
//     return jwt.sign(userRoutes, process.env.ACCESS_TOKEN_SECRET, {expiresIn : '1800s'})
// }

// app.post('/api/v1/login', (req, res) =>{
//     if (req.body.email_user != userRoutes.email_user){
//         res.status(401).send('invalid credentials')
//         return
//     }
//     if (req.body.password_user != userRoutes.password_user){
//         res.status(401).send('invalid credentials')
//         return
//     }
//     const accessToken = generateAccessToken(userRoutes)
//     res.send({accessToken})
    
// })







//lecture du port
app.listen(process.env.APP_PORT, ()=>{
    console.log('Express Server is running on port :', process.env.APP_PORT)
})


