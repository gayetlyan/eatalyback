const express  = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')


//
//
//USER

//avoir tous les utilisateurs

router.post('/signup', userController.signUp)

router.post('/login', userController.login)
router.get('/', userController.getUserList)

//avoir les utilisateurs par id
router.get('/:iduser', userController.getUserByID)

//avoir des nouveaux utilisateurs
router.post('/', userController.createNewUser)

//MAJ utilisateur
router.put('/:iduser', userController.updateUser)

//suppression utilisateur
router.delete('/:iduser', userController.deleteUser)


module.exports = router
