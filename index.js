require('dotenv').config()
const express = require ('express')
const bodyParser = require('body-parser')
// const jwt = require('jsonwebtoken')





//creer l'app express
const app = express()



//server
const port = 8080

// ---------------Autorisation des rêquetes-----------//

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });

//parse request data content type application/x-ww-form-rulencoded
app.use(bodyParser.urlencoded({extended: false}))



//parse request data content type application/json
app.use(bodyParser.json())

//root
app.get('/', (req, res)=> {
    res.send('Hello world')
})







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

//creation desimages
app.use('/images', express.static('images'))









//lecture du port
app.listen(8080, ()=>{
    console.log('Express Server is running on port :', 8080)
})


