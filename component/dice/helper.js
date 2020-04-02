'use strict'

const Hash = require('./hashModel')

async function createHash(reveal, commit, commitlastblock) {
    Hash.create({reveal: reveal, commitlastblock: commitlastblock, commit: commit}, function (err, hash) {
	if (err) {

	}
	// saved!
    })
}

module.exports = {
    createHash
}
