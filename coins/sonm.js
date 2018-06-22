/**
* @title SONM
* @symbol SNM
* @ethContractAddr 0x983f6d60db79ea8ca4eb9968c6aff8cfa04b3c63
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x983f6d60db79ea8ca4eb9968c6aff8cfa04b3c63?apiKey=freekey', (error, response, body) => {
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
