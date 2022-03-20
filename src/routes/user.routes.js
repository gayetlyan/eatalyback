const express  = require('express')
const router = express.Router()

// const { authJwt } = require("../middleware");
const userController = require('../controllers/user.controller')



// module.exports = function(app) {
//     app.use(function(req, res, next) {
//       res.header(
//         "Access-Control-Allow-Headers",
//         "x-access-token, Origin, Content-Type, Accept"
//       );
//       next();
//     });
//     app.get("/api/test/all", userController.allAccess);
//     app.get(
//       "/api/test/user",
//       [authJwt.verifyToken],
//       controller.userBoard
//     );
// }
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
