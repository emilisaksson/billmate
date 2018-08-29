let utility = require('../utility');

module.exports = config => {
    let defaultConfig = config;
    /**
     * Used to cancel a created payment.
     * @param {number} number - The payment number of the payment you wish to cancel.
     * @param {string} [config] - Used to modify the config of the request.
     */
    function cancelPayment(number, config) {
        if (!config)
            config = {};
        let completeConfig = Object.assign(defaultConfig, config);
        return new Promise((resolve, reject) => {
            if (!number)
                reject(new Error('number is mandatory.'));
            utility.makeRequest('cancelPayment', { number: number }, completeConfig).then(resolve).catch(reject);
        });
    }

    return cancelPayment;
}