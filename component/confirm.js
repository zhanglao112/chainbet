'use strict'

const web3 = require('./web3Provider')

async function getConfirmations(txHash) {
    try {
	const trx = await web3.eth.getTransaction(txHash)
	const currentBlock = await web3.eth.getBlockNumber()

	return trx.blockNumber === null ? 0 : currentBlock - trx.blockNumber
    } catch (error) {
	console.log(error)
    }
}

function confirmEtherTransaction(txHash, confirmations=10) {
    setTimeout(async () => {
	const trxConfirmations = await getConfirmations(txHash)

	if (trxConfirmations >= confirmations) {
	    console.log("confirm ok")
	    return
	}

	return confirmEtherTransaction(txHash, confirmations)
    }, 30 * 1000)
}

module.exports = confirmEtherTransaction
