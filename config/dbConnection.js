'use strict'

const Promise = require('bluebird')
const mongoose = require('mongoose')
const config = require('./main')
const env = require('./main').environments
const logger = require('./logger')

mongoose.Promise = Promise
process.env.NODE_ENV = env.ropsten

logger.info('Connecting to the Mongo DB: ' + config.db_connection[process.env.NODE_ENV])
mongoose.connect(config.db_connection[process.env.NODE_ENV])

const db = mongoose.connection
db.on('error', (err) => {
    logger.error('Error connection to Mongo DB')
    logger.error(err)
})
db.once('open', () => {
    logger.info('Connection to API service DB ok!')
})

process.on('unhandleRejection', (err) => {
    logger.error(err)
})

mongoose.db = db

module.exports = mongoose
