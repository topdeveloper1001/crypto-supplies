/**
* @title Linker Coin
* @symbol LNC
* @ethContractAddr 0x6BEB418Fc6E1958204aC8baddCf109B8E9694966
* @implementation Dynamic
*/

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x6BEB418Fc6E1958204aC8baddCf109B8E9694966?apiKey=freekey', (error, response, body) => {
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
