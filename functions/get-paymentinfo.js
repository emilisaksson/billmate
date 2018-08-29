let utility = require('../utility');

module.exports = config => {
    let defaultConfig = config;
    /**
     * Get info about a payment.
     * @param {number} number - The payment number of the payment/invoice you wish to get info about.
     * @param {string} [config] - Used to modify the config of the request.
     */
    function getPaymentinfo(number, config) {
        if (!config)
            config = {};
        let completeConfig = Object.assign(defaultConfig, config);
        return new Promise((resolve, reject) => {
            if (!number)
                reject(new Error('number is mandatory.'));
            utility.makeRequest('getPaymentinfo', { number: number }, completeConfig).then(resolve).catch(reject);
        });
    }

    return getPaymentinfo;
}