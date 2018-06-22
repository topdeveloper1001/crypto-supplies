/**
* @title Qvolta
* @symbol QVT
* @ethContractAddr 0x1183f92a5624d68e85ffb9170f16bf0443b4c242
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x1183f92a5624d68e85ffb9170f16bf0443b4c242?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -18)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
