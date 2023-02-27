export default {
  PORT: 5000,
  COINGECKO_API_URL: 'https://api.coingecko.com/api/v3/coins/list?include_platform=true',
  BASE_ETHEREUM_NODE_URL: 'https://mainnet.infura.io/v3/',
  INFURA_ID_1: '3534dd2b55f74909ba201eb0c9afcdaf',
  INFURA_ID_2: '3c052e3a6c774bf79e3052a0c1cef169',
  INFURA_ID_4: '3534dd2b55f74909ba201eb0c9afcdaf',
  BALANCE_DIR_NAME: 'public',
  BALANCE_FILE_NAME: 'balance.json',
  TEST_WALLET_ADDRESS: '0xA145ac099E3d2e9781C9c848249E2e6b256b030D',
  ERC20ABI: [
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
  ],
}
