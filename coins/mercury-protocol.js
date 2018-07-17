/**
 * @title Mercury Protocol
 * @symbol GMT
 * @ethContractAddr 0xb3bd49e28f8f832b8d1e246106991e546c323502
 * @implementation Dynamic
 * @cmcId mercury-protocol
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xb3bd49e28f8f832b8d1e246106991e546c323502?apiKey=freekey', (error, response, body) => {
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
