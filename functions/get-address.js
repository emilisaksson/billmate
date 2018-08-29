let utility = require('../utility');

module.exports = config => {
    let defaultConfig = config;
    /**
     * Get Address data for a person or organization.
     * @param {string} pno - Social security number (SSN) or organisation number.
     * @param {string} [country] - Country code for the pno. Default is SE.
     * @param {string} [config] - Used to modify the config of the request.
     */
    function getAddress(pno, country, config) {
        if (!config)
            config = {};
        let completeConfig = Object.assign(defaultConfig, config);
        return new Promise((resolve, reject) => {
            if (!pno)
                reject(new Error('pno is mandatory.'));
            utility.makeRequest('getAddress', { pno: pno, country: country }, completeConfig).then(resolve).catch(reject);
        });
    }

    return getAddress;
}