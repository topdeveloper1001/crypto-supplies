/**
* @title Verify
* @symbol CRED
* @ethContractAddr 0x672a1ad4f667fb18a333af13667aa0af1f5b5bdd
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x672a1ad4f667fb18a333af13667aa0af1f5b5bdd?apiKey=freekey', (error, response, body) => {
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
