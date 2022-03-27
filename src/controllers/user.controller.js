
const UserModel = require('../models/user.models')
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');



exports.signUp = (req, res) => {
  UserModel.getUserByEmail(req.body.email_user, (err,results)=>{
   console.log(results);

    if (results.length > 0) {
      res.status(409).json({ message: 'email already exist!' });
    } else {
      bcryptjs.genSalt(10, function (err, salt) {
        bcryptjs.hash(req.body.password_user, salt, function (err, hash) {
          const user = {
            telephone_user : req.body.telephone_user,
            email_user: req.body.email_user,
            password_user: hash,
            is_admin : req.body.is_admin
            
          };
          console.log(user);

          UserModel.createUser(user,(err,results)=>{
            if(err){
              res.status(500).json({
                message: 'cannot create the user!',
              });
            }else{
              res.status(201).json({
                message: 'user created!',
              });
            }
          });
        });
      });
    }

  })
    
}



exports.login = (req, res) => {
  UserModel.getUserByEmail(req.body.email_user, (err, results) => {
      
        if (results.length === 0) {
            res.status(401).json({
                message: 'Invalid!',
            });
        } else {
            bcryptjs.compare(
                req.body.password_user,
                results[0].password_user,
                function (err, result) {
                    if (result) {
                        const token = jwt.sign(
                            {
                                email: result.email_user,
                                userId: result.iduser,
                            },
                            'RANDOM_TOKEN_SECRET',
                            function (err, token) {
                                res.status(200).json({
                                    message: 'Authentification ok!',
                                    token: token,
                                    userId:  results[0].iduser,
                                    email:  results[0].email_user,
                                    is_admin :  results[0].is_admin
                                });
                            }
                        );
                    } else {
                        res.status(401).json({ message: 'Invalid!' });
                    }
                }
            );
        }
    })
}



//avoir la liste des utilisateurs
exports.getUserList = (req, res) => {
    //console.log('here all users list')
    UserModel.getAllUsers((err, users) => {
        console.log('We are here')
        if (err) {
            res.send(err)
        }
        else {
            console.log('Users', users)
            res.send(users)
        }
    })
}

//recuperer les utilisateurs par ID
exports.getUserByID = (req, res) => {
    //console.log('get user by id')
    console.log(req.params.iduser);
    UserModel.getUserByID(req.params.iduser, (err, user) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
            console.log('single user data', user)
            res.send(user)
        }

    })
}

//creation de user
exports.createNewUser = (req, res) => {
    const userReqData = new UserModel(req.body)
    console.log('userReqData', userReqData)
    //check null
    if (req.body.constructor === Object && Object.keys(req.body).length == 0) {
        res.status(400).send({ success: false, message: 'please fill all fields' })
    }
    else {
        UserModel.createUser(userReqData, (err, user) => {
            if (err) {
                res.send(err)
            }
            else {
                res.json({ status: true, message: 'User created successfully', data: user.insertId })
            }
        })
    }
}




//update User
exports.updateUser = (req, res) => {
    const userReqData = new UserModel(req.body)
    console.log('userReqData update', userReqData)
    //check null
    if (req.body.constructor === Object && Object.keys(req.body).length == 0) {
        res.status(400).send({ success: false, message: 'please fill all fields' })
    }
    else {
        UserModel.updateUser(req.params.iduser, userReqData, (err, user) => {
            if (err) {
                res.send(err)
            }
            else {
                res.json({ status: true, message: 'User update successfully' })
            }

        })
    }
}


//supprimer user
exports.deleteUser = (req, res) => {
    UserModel.deleteUser(req.params.iduser, (err, users) => {
        if (err) {
            res.send(err)
        }
        else {
            res.json({ success: true, message: 'User deleted successfully !' })
        }

    })
}
