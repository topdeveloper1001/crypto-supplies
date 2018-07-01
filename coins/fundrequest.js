/**
* @title FundRequest
* @symbol FND
* @ethContractAddr 0x4df47b4969b2911c966506e3592c41389493953b
* @implementation Dynamic
*/

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x4df47b4969b2911c966506e3592c41389493953b?apiKey=freekey', (error, response, body) => {
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
