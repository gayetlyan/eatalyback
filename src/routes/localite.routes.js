const express  = require('express')
const router = express.Router()

const localiteController = require('../controllers/localite.controller')


//
//
//LOCALITE

//avoir tous les localités
router.get('/', localiteController.getLocaliteList)

//avoir les localites par id
router.get('/:idLocalite', localiteController.getLocaliteByID)

//avoir des nouveaux localités 
router.post('/', localiteController.createNewLocalite)

//suppression localité
router.delete('/:idLocalite', localiteController.deleteLocalite)


module.exports = router