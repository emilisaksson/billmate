let defaultConfig = {
    test: false,
    language: 'sv'
};

module.exports = function (id, secret, config) {
    if (!id)
        throw new Error('You need to provide the store ID.');
    if (!secret)
        throw new Error('You need to provide the Billmate secret.');
    if (!config)
        config = {};
    let completeConfig = Object.assign(defaultConfig, config, { id: id, key: secret });

    this.getAddress = require('./functions/get-address')(completeConfig);
    this.getPaymentinfo = require('./functions/get-paymentinfo')(completeConfig);
    this.getPaymentplans = require('./functions/get-paymentplans')(completeConfig);
    this.getTerms = require('./functions/get-terms')(completeConfig);
    this.addPayment = require('./functions/add-payment')(completeConfig);
    this.cancelPayment = require('./functions/cancel-payment')(completeConfig);
    this.updatePayment = require('./functions/update-payment')(completeConfig);
    this.activatePayment = require('./functions/activate-payment')(completeConfig);
    this.creditPayment = require('./functions/credit-payment')(completeConfig);
    this.initCheckout = require('./functions/init-checkout')(completeConfig);


    // Enums
    this.paymentMethods = {
        INVOICE_FACTORING: 1,
        INVOICE_SERVICE: 2,
        INVOICE_PART_PAYMENT: 4,
        CARD: 8,
        BANK: 16,
        CARD_BANK: 24,
        CASH: 32,
        SWISH: 1024
    }

    this.currency = {
        SEK: 'SEK',
        DKK: 'DKK',
        NOK: 'NOK',
        GBP: 'GBP',
        EUR: 'EUR',
        USD: 'USD'
    }

}


