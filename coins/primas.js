/**
* @title Primas
* @symbol PST
* @ethContractAddr 0xe3fedaecd47aa8eab6b23227b0ee56f092c967a9
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xe3fedaecd47aa8eab6b23227b0ee56f092c967a9?apiKey=freekey', (error, response, body) => {
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
