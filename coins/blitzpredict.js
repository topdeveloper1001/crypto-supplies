/**
* @title BlitzPredict
* @symbol XBP
* @ethContractAddr 0x28dee01d53fed0edf5f6e310bf8ef9311513ae40
* @implementation Dynamic
*/

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x28dee01d53fed0edf5f6e310bf8ef9311513ae40?apiKey=freekey', (error, response, body) => {
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
