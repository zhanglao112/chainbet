module.exports = {
    environments: {
	test: 'test',
	ropsten: 'ropsten',
	mainnet: 'mainnet'
    },
    rpc_endpoint: {
	test: 'http://localhost:8545',
	ropsten: process.env.RPC_ENDPOINT || 'https://ropsten.infura.io/v3/42c1e8c10f8314edmbb62bf0f28db074732',
	mainnet: process.env.RPC_ENDPOINT || 'https://mainnet.infura.io/v3/42c1e8c10f8314edmbb62bf0f28db074732'
    },
    contract_included_block: 3121672,
    parsing_active: true,
    db_connection: {
	test: 'mongodb://localhost:27017/cool_data_db',
	ropsten: process.env.DB_CONNECTION || 'mongodb://localhost:27017/cool_data_db',
	mainnet: process.env.DB_CONNECTION || 'mongodb://localhost:27017/cool_data_db',
    },
    app_contract_address: '0x99899C60566e1a78DF17F7188632733E1dACE0BAME',
    privateKey: 'secretkey',
    domain: process.env.API_DOMAIN || 'http://localhost:3030',
    last_endpoint_version: '0.0.1',
    version: 'v1',
    port: process.env.PORT || 3030
}
