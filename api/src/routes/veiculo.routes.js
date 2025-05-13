const express = require('express')
const router = express.Router()
const veiculoController = require('../controllers/veiculo.controller')

router.get('/', veiculoController.getAllVeiculos)
router.get('/:id', veiculoController.getVeiculoById)
router.post('/', veiculoController.createVeiculo)
router.put('/:id', veiculoController.updateVeiculo)
router.delete('/:id', veiculoController.deleteVeiculo)

module.exports = router