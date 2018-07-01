/**
* @title Moeda Loyalty Points
* @symbol MDA
* @ethContractAddr 0x51db5ad35c671a87207d88fc11d593ac0c8415bd
* @implementation Dynamic
*/

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x51db5ad35c671a87207d88fc11d593ac0c8415bd?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -18)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
