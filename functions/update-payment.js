let utility = require('../utility');

module.exports = config => {
    let defaultConfig = config;
    /**
     * Used for updating an existing payment.
     * @param {Object} data - Payment data as specified in Billmate documentation.
     * @param {string} [config] - Used to modify the config of the request.
     */
    function updatePayment(data, config) {
        if (!config)
            config = {};
        let completeConfig = Object.assign(defaultConfig, config);
        return new Promise((resolve, reject) => {
            if (!data)
                reject(new Error('data object is mandatory'))
            utility.makeRequest('updatePayment', data, completeConfig).then(resolve).catch(reject);
        });
    }

    return updatePayment;
}