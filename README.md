# Billmate

A Node.js module for Billmate API integration.

## Getting Started

Read the [Billmate API documentation](http://developer.billmate.se) and [contact Billmate](https://www.billmate.se/partners/) to obtain a Store ID and API secret.

### Installing

```
    npm install billmate
```


## Examples

Require the module:
```
    let Billmate = require('billmate');
```

Initialize the module with your Store ID and secret key:
```
    let billmate = new Billmate('12345', '1234567890');
```

To target the test environment:
```
    let billmate = new Billmate('12345', '1234567890', { test: true });
```


### Functions

#### getAddress
Get Address data for a person or organization.

```
    billmate.getAddress('550101-1018').then(response => {
        /* 
        response.data:
            { 
                firstname: 'Testperson',
                lastname: 'Approved',
                street: 'Teststreet',
                zip: '12345',
                city: 'Testcity',
                country: 'SE',
                phone: '0700123456',
                email: 'test@teststore123.com' 
            }
            */            
    }).catch(error => {
        // Handle error
    });
```

#### getPaymentinfo
Get info about a payment.

```
    billmate.getPaymentinfo('1077').then(response => {
         // See Billmate documentation for return data          
    }).catch(error => {
        // Handle error
    });
```

#### getPaymentplans
Used for fetching part payment plans.

```
    billmate.getPaymentplans('SEK', 'SE', 'sv').then(response => {
         // See Billmate documentation for return data          
    }).catch(error => {
        // Handle error
    });
```

#### getTerms
Used for fetching the Billmate payment terms.

```
    billmate.getTerms(1, 231700).then(html => {
         // Do stuff with the HTML       
    }).catch(error => {
        // Handle error
    });
```

#### addPayment
Used for creating payments.

```
    let data = { ... };
    billmate.addPayment(data).then(response => {
         // See Billmate documentation for return data     
    }).catch(error => {
        // Handle error
    });
```

#### cancelPayment
Used to cancel a created payment.

```
    billmate.cancelPayment(1077).then(response => {
         // See Billmate documentation for return data     
    }).catch(error => {
        // Handle error
    });
```

#### updatePayment
Used for updating an existing payment.

```
    let data = { ... };
    billmate.updatePayment(data).then(response => {
         // See Billmate documentation for return data     
    }).catch(error => {
        // Handle error
    });
```

#### creditPayment
Used for crediting payments. The original payment can be credited fully or partially.

```
    billmate.creditPayment(1077).then(response => {
         // See Billmate documentation for return data     
    }).catch(error => {
        // Handle error
    });
```



## Authors

* **Emil Isaksson** - *Creator* - [emilisaksson](https://github.com/emilisaksson)


## License

This project is licensed under the GNU General Public License - see the [LICENSE.md](LICENSE.md) file for details

