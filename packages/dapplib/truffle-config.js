require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enter flat sugar fan remember stick snake inner end army gasp'; 
let testAccounts = [
"0xfa47fda6e07691c1ee20704b55e9c3e44bdf67020de3f5daa047c2e7afd3dd10",
"0xf7a47a2d3c90155acfef52e7fead777981e459c30908cf47cd6da154c2e4c9d6",
"0x874d4bb054ed7cae347db28017a8e6e5a8399a3e37bfcb113c87c426cda3bd49",
"0x5731709e437aa41a6940500512e84481a43927642fc8a479d3e5e72b97e1fe6b",
"0x62b3920ca8ce3d92d84171621ed8f99d85a004da655aac63c82204541abfd736",
"0xc759b2165e197b8abd7b5c4ff8ffea10b8b6ca5f40f58005a5177095c7704f22",
"0xf87d920f71335fdc7c554fc1c038391dc95a3a558eef4fec91f740cf67abb5ac",
"0x073b7cedc5ded152b27176ea49bdd472b08b7c4eaf459ee59259f31c4746f00d",
"0xacbc522c44b54d34a17798fc74c6f537b8ab8447503c3748af529b40ee89cde2",
"0xb4bfb085c6196ca1285ebd1c9928f93583b183f47781fc56ba4387f16ddad993"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

