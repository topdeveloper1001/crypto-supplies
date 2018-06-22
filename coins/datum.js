/**
* @title Datum
* @symbol DAT
* @ethContractAddr 0x81c9151de0c8bafcd325a57e3db5a5df1cebf79c
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x81c9151de0c8bafcd325a57e3db5a5df1cebf79c?apiKey=freekey', (error, response, body) => {
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
