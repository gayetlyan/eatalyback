const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const loginModel = require('../models/login.models')


// // module.exports = { 
// //     register: function (req, res) {
// //         var email_user = req.body.email_user
// //         var password_user = req.body.password_user
// //         var telephone_user = req.body.telephone_user
// //         var is_admin = req.body.is_admin

// //         if (email_user == null || password_user == null){
// //             return res.status(400).json({'error' : 'missing parameters' })
// //         }

// //         models.User.findOne({
// //             attributes: ['email_user'],
// //             where: { email_user :  email_user}
// //         })
// //         .then(function(userFound){
// //             if (!userFound){
// //                 bcrypt.hash(password_user, 5, function(err, bcryptedPassword){

// //                 })
// //             }
// //             else{
// //                 res.status(409).json({'error' : 'user already exist'})
// //             }
// //         })
// //         .catch(function(err){
// //             return res.status(500).json({'error' : 'unable to verify user'})
// //         })
// //     },
// //     login: function (req, res){

// //     }
// // }






// const dbConn = require("../models");
// const config = require("../config/auth.config");
// const User = db.user;
// var jwt = require("jsonwebtoken");
// var bcrypt = require("bcryptjs");
// exports.signup = (req, res) => {
//   // Save User to Database
//   User.createNewUser({
//     email_user: req.body.email_user,
//     password_user: bcrypt.hashSync(req.body.password_user, 8)
//   })
// };
// exports.signin = (req, res) => {
//   User.findOne({
//     where: {
//       email_user: req.body.email_user
//     }
//   })
//     .then(user => {
//       if (!user) {
//         return res.status(404).send({ message: "User Not found." });
//       }
//       var passwordIsValid = bcrypt.compareSync(
//         req.body.password_user,
//         user.password_user
//       );
//       if (!passwordIsValid) {
//         return res.status(401).send({
//           accessToken: null,
//           message: "Invalid Password!"
//         });
//       }
//       var token = jwt.sign({ Iduser: user.Iduser }, config.secret, {
//         expiresIn: 8640 // 24 hours
//       });
//     })
//     .catch(err => {
//       res.status(500).send({ message: err.message });
//     });
// };
