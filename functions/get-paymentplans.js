let utility = require('../utility');

module.exports = config => {
    let defaultConfig = config;
    /**
     * Used for fetching part payment plans.
     * @param {string} currency - Currency code to be used for the payment according to ISO 4217.
     * @param {string} country - Country code for the country where purchase is made (normally store location) according to ISO 3166-1 alpha-2, e.g. SE, DK, NO, GB.
     * @param {string} language - Language code for the language used on the invoice/recipt according to ISO 639-1. Currently supported: sv.
     * @param {number} [totalwithtax] - The monthly cost with tax for each payment plan will be calculated from the total payment value with tax. Total payment including tax needs to be in 1/100 of currency (i.e. öre if currency is SEK, cent if currency is EUR).
     * @param {string} [config] - Used to modify the config of the request.
     */
    function getPaymentplans(currency, country, language, totalwithtax, config) {
        if (!config)
            config = {};
        let completeConfig = Object.assign(defaultConfig, config);
        return new Promise((resolve, reject) => {
            if (!currency)
                reject(new Error('currency is mandatory.'));
            if (!country)
                reject(new Error('country is mandatory.'));
            if (!language)
                reject(new Error('language is mandatory.'));
            utility.makeRequest('getPaymentplans', {
                PaymentData: {
                    currency: currency,
                    country: country,
                    language: language,
                    totalwithtax: totalwithtax
                }
            }, completeConfig)
                .then(resolve).catch(reject);
        });
    }

    return getPaymentplans;
}