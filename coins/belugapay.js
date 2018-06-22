/**
* @title BelugaPay
* @symbol BBI
* @ethContractAddr 0x37d40510a2f5bc98aa7a0f7bf4b3453bcfb90ac1
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x37d40510a2f5bc98aa7a0f7bf4b3453bcfb90ac1?apiKey=freekey', (error, response, body) => {
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
