let utility = require('../utility');

module.exports = config => {
    let defaultConfig = config;
    /**
     * Used for crediting payments. The original payment can be credited fully or partially.
     * @param {number} number - The payment number of the payment you wish to credit.
     * @param {boolean} partcredit - If part credit, then articles that should be credited and the cart needs to be specified.
     * @param {Object[]} articles - An array of articles to be credited.
     * @param {Object} cart - Cart object to be sent with the request.
     * @param {string} [config] - Used to modify the config of the request.
     */
    function creditPayment(number, partcredit, articles, cart, config) {
        if (!config)
            config = {};
        let completeConfig = Object.assign(defaultConfig, config);
        return new Promise((resolve, reject) => {
            if (!number)
                reject(new Error('number is mandatory.'));
            utility.makeRequest('creditPayment', {
                PaymentData: {
                    number: number,
                    partcredit: partcredit
                },
                Articles: articles,
                Cart: cart
            }, completeConfig).then(resolve).catch(reject);
        });
    }

    return creditPayment;
}