/**
 * @title Genaro Network
 * @symbol GNX
 * @ethContractAddr 0x6ec8a24cabdc339a06a172f8223ea557055adaa5
 * @implementation Dynamic
 * @cmcId genaro-network
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x6ec8a24cabdc339a06a172f8223ea557055adaa5?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -9)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
