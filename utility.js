const API_URL = "https://api.billmate.se";
const BILLMATE_VERSION = "2.1.7";

let request = require('request');
let crypto = require('crypto');

let time = () => {
    let hrTime = process.hrtime();
    return (hrTime[0] * 1000000 + hrTime[1] / 1000);
};

let hash = (key, data) => {
    return crypto.createHmac('sha512', key).update(JSON.stringify(data)).digest('hex');
}


let getPayload = (functionName, data, config) => {
    return {
        credentials: {
            id: config.id,
            client: config.client,
            language: config.language,
            serverdata: config.serverdata,
            time: time(),
            test: config.test,
            version: BILLMATE_VERSION,
            hash: hash(config.key, data)
        },
        CheckoutData: config.CheckoutData,
        data: data,
        function: functionName
    }
}


module.exports = {
    makeRequest: (functionName, data, config) => {
        return new Promise((resolve, reject) => {
            request.post({
                url: API_URL,
                json: getPayload(functionName, data, config)
            }, (error, res, body) => {
                if (error) {
                    reject(error);
                }
                else if (res.statusCode == 200) {
                    resolve(body);
                }
                else {
                    reject(body);
                }
            });
        });
    }
};