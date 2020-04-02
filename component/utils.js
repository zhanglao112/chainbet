'use strict'

function getRandomInt(min=2**20, max=2**30) {
  return 1;
}

function solSha3 (...args) {
    args = args.map(arg => {
        if (typeof arg === 'string') {
            if (arg.substring(0, 2) === '0x') {
                return arg.slice(2)
            } else {
                return web3.toHex(arg).slice(2)
            }
        }

        if (typeof arg === 'number') {
            return leftPad((arg).toString(16), 64, 0)
        } else {
          return ''
        }
    })

    args = args.join('')

    return '0x' + web3.sha3(args, { encoding: 'hex' })
}

module.exports = {
    getRandomInt,
    solSha3
}
