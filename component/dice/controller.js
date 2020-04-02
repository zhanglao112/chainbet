'use strict'

const _ = require('underscore')
const httpStatus = require('http-status-codes')
const logger = require('../../config/logger')
const hash = require('./hashModel')
const utils = require('../utils')
const config = require('../../config/main')
const helper = require('./helper')
const web3 = require('../web3Provider')

//const BN = web3.utils.BN

async function placeBet(req, res) {
    const query = {
    }


    const result = {
	info: "demo"
    }
    return res.json(result)
}

module.exports =  {
    placeBet
}

