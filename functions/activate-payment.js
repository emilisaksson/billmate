let utility = require('../utility');

module.exports = config => {
    let defaultConfig = config;
    /**
     * Used for activating payments and get payout from Billmate.
     * @param {number} number - The payment number of the payment you wish to activate.
     * @param {string} [config] - Used to modify the config of the request.
     */
    function activatePayment(number, config) {
        if (!config)
            config = {};
        let completeConfig = Object.assign(defaultConfig, config);
        return new Promise((resolve, reject) => {
            if (!number)
                reject(new Error('number is mandatory.'));
            utility.makeRequest('activatePayment', { number: number }, completeConfig).then(resolve).catch(reject);
        });
    }

    return activatePayment;
}