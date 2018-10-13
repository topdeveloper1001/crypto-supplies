/**
 * @title HEROcoin
 * @symbol PLAY
 * @ethContractAddr 0xe477292f1b3268687a29376116b0ed27a9c76170
 * @implementation Dynamic
 * @cmcId herocoin
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xe477292f1b3268687a29376116b0ed27a9c76170?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -18)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
