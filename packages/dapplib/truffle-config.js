require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food iron royal mushroom exchange hover entire slot gentle'; 
let testAccounts = [
"0x249d64246ba5a3c81f6501b3ff4c4a77d2ab72ef0e05f2e1eb490072366f2c47",
"0x7ea67ef11da97a507298959e3851c4afc0830d3a9d8917aad13d05d864aee34d",
"0xb9e5861d001be20bd16b0aee38eaa2aa26ae29b6c261e06d9d00bab4bb10ae17",
"0x44f64c209ac1afe17a564749a1973d1b3b9acb162e9313f1b80fe35131645f9e",
"0x8acb673a39710d50bb5daae9963524e6a6d22205ee0ab024082189c0149fba52",
"0x58c3f366036f660c16f9253108e3754ae7ca43c3e11d3282d3177be637a259f7",
"0x43d896c126f8938a7e3f5a579692e6d698679662cc1818afd986bdb5c4967fb0",
"0xc9f1376cb4caac5c7e6953b6d4396dd97ff5e11c18be4bce032a66bf4093ce32",
"0x4c99a209cf9035825ad3aaf65ba4c291d7ab25b9f89943ab455e9573eb360daf",
"0xd129a4ef763ea17e4b712fb04a8c593c2cc553b264f29c8a010276163b8826a9"
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
            version: '^0.5.11'
        }
    }
};
