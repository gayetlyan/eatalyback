const express  = require('express')
const router = express.Router()

const carteController = require('../controllers/carte.controller')
const authJwt = require('../middleware/authJwt')


//
//
//CARTE

//avoir tous les menus
router.get('/', carteController.getCarteList)

//avoir les menus par id
router.get('/:idMenu', carteController.getCarteByID)

//avoir les menus par nom
router.get('/:nom_menu', carteController.getCarteByNAME)

//avoir les menus par categorie
router.get('/:categorie', carteController.getCarteByCategorie)

//avoir des nouveaux menus
router.post('/', carteController.createNewCarte)

//MAJ menus
router.put('/:idMenu', carteController.updateCarte)

//suppression utilisateur
router.delete('/:idMenu', carteController.deleteCarte)


module.exports = router