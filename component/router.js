'use strict'

const express = require('express')

//const pagination = require('./pagination')


// todo controllers
const diceController = require('./dice/controller')

const apiRoutes = express.Router()
const v1Routes = express.Router()

apiRoutes.use('/v1', v1Routes)

// dice
v1Routes.get('/dice/placebet', diceController.placeBet)
//v1Routes.get('/dice/list', diceController.list)

module.exports = apiRoutes
