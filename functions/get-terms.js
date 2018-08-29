let utility = require('../utility');

module.exports = config => {
    let defaultConfig = config;
    /**
     * Used for fetching the Billmate payment terms.
     * @param {number} method - Payment method. Invoice = 1, Part payment = 4
     * @param {number} totalwithtax - Total payment including tax in 1/100 of currency (i.e. öre if currency is SEK, cent if currency is EUR). 
     * @param {number} [paymentplanid] - Paymentplanid is only required if method is 4 (Part payment).
     * @param {string} [config] - Used to modify the config of the request.
     */
    function getTerms(method, totalwithtax, paymentplanid, config) {
        if (!config)
            config = {};
        let completeConfig = Object.assign(defaultConfig, config);
        return new Promise((resolve, reject) => {
            if (!method)
                reject(new Error('method is mandatory.'));
            if (!totalwithtax)
                reject(new Error('totalwithtax is mandatory.'));
            utility.makeRequest('getTerms', {
                PaymentData: {
                    method: method,
                    paymentplanid: paymentplanid
                },
                Cart: {
                    Total: {
                        withtax: totalwithtax
                    }
                }
            }, completeConfig).then(resolve).catch(reject);
        });
    }

    return getTerms;
}