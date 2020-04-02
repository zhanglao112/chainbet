'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const httpStatus = require('http-status-codes')
const helmet = require('helmet')

const server = require('./config/socket')(app)
const config = require('./config/main')
const routes = require('./component/router')
const morgan = require('morgan')
const logger = require('./config/logger')

const watcher = require('./component/watcher.js')

if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = config.environments.ropsten
}
const env = process.env.NODE_ENV

app.use(helmet())
app.use(bodyParser.json({limit: '500kb'}))
app.use(bodyParser.urlencoded({limit: '500kb', extended: true}))
app.use(morgan('dev', { 'stream': logger.stream }))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials')
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Expose-Headers', 'Content-Disposition')
    next()
})

app.use('/api/', routes)

app.use(function (req, res) {
    logger.info('Wrong end point: ' + req.originalUrl)
    res.status(httpStatus.OK)
    res.json({
	'api_endpoint': config.domain + '/api/' + config.last_endpoint_version,
	'version': config.version,
	'request': req.originalUrl
    })
})

const port = config.port

server.listen(port, () => {
    logger.info('Current environment: %s', env)
    logger.info('Dice of API. Server listening on port %s', port)
    logger.info('Domain: %s', config.domain)
})

watcher.watchFCK()
console.log("Starting watching FCK")

module.exports = app

