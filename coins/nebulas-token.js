/**
 * @title Nebulas
 * @symbol NAS
 * @ethContractAddr 0x5d65d971895edc438f465c17db6992698a52318d
 * @implementation Dynamic
 * @cmcId nebulas-token
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x5d65d971895edc438f465c17db6992698a52318d?apiKey=freekey', (error, response, body) => {
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
