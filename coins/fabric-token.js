/**
 * @title Fabric Token
 * @symbol FT
 * @ethContractAddr 0x78a73B6CBc5D183CE56e786f6e905CaDEC63547B
 * @implementation Dynamic
 * @cmcId fabric-token
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x78a73B6CBc5D183CE56e786f6e905CaDEC63547B?apiKey=freekey', (error, response, body) => {
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
