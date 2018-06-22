/**
* @title TokenStars
* @symbol TEAM
* @ethContractAddr 0x1c79ab32C66aCAa1e9E81952B8AAa581B43e54E7
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x1c79ab32C66aCAa1e9E81952B8AAa581B43e54E7?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -4)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
