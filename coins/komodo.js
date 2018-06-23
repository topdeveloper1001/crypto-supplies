/**
 * @title Komodo
 * @symbol KMD
 * @implementation Dynamic
 */
var request = require('request');

module.exports = (callback) => {
    request({
        uri: 'http://kmd.komodochainz.info/ext/summary',
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body.data[0].supply)
            })
        } else {
            callback(new Error('Request error ' + (typeof response !== 'undefined' ? response.statusCode : error.message)));
        }
    });
};
