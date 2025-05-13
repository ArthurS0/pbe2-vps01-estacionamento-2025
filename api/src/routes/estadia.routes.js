const express = require('express')
const router = express.Router()
const estadiaController = require('../controllers/estadia.controller')

router.get('/', estadiaController.getAllEstadias)
router.get('/:id', estadiaController.getEstadiaById)
router.post('/', estadiaController.createEstadia)
router.put('/:id', estadiaController.updateEstadia)
router.delete('/:id', estadiaController.deleteEstadia)

module.exports = router
