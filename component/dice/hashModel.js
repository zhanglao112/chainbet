'use strict'

const mongoose = require('../../config/dbConnection')
const Schema = mongoose.Schema

//    reveal = models.IntegerField()
//    commitlastblock = models.IntegerField()
//    commit = models.CharField(max_length=64)
//    is_settle = models.BooleanField(default=False)
const hashSchema = new Schema({
    address: {
	required: true,
	type: String
    },
    reveal: {
	required: true,
	type: Number
    },
    commitlastblock: {
	required: true,
	type: Number
    },
    tx_hash: {
	type: String
    },
    block_number: {
	type: Number,
    },
    block_hash: {
	type: String
    },
    bet_on: {
	type: Number
    },
    win: {
	type: Number
    },
    is_settle: {
	required: true,
	default: false,
	type: Boolean
    }
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}
})

module.exports = mongoose.db.model('hash', hashSchema)
