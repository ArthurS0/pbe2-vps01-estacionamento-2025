const express = require('express')
const cors = require('cors')
const veiculoRoutes = require('./routes/veiculo.routes')
const estadiaRoutes = require('./routes/estadia.routes')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/veiculos', veiculoRoutes)
app.use('/estadias', estadiaRoutes)

module.exports = app
