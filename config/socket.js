'use strict'

const logger = require('./logger')

const init = function (app) {
    const server = require('http').Server(app)
    const io = require('socket.io')(server)

    app.set('io', io)

    io.set('transports', ['websocket'])

    io.on('connection', (socket) => {
	logger.info('a user connected')

	socket.on('disconnect', () => {
	    logger.info('user disconnected')
	})
    })

    return server
}

module.exports = init
