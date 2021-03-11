console.log('Loading');
const AWS = require("aws-sdk");

exports.handler = async function (event, context) {

    var UomEnum = [
        // ----- Mass -----
        {
            "initialUOM": "t",
            "desiredUOM": "mt",
            "factor": 0.9072
        },
        {
            "initialUOM": "t",
            "desiredUOM": "lb",
            "factor": 2000
        },
        {
            "initialUOM": "t",
            "desiredUOM": "kg",
            "factor": 907.185
        },
        {
            "initialUOM": "mt",
            "desiredUOM": "t",
            "factor": 1.1023
        },
        {
            "initialUOM": "mt",
            "desiredUOM": "lb",
            "factor": 2204.62
        },
        {
            "initialUOM": "mt",
            "desiredUOM": "kg",
            "factor": 1000
        },
        {
            "initialUOM": "kg",
            "desiredUOM": "lb",
            "factor": 2.2046
        },
        {
            "initialUOM": "kg",
            "desiredUOM": "oz",
            "factor": 35.274
        },
        {
            "initialUOM": "kg",
            "desiredUOM": "g",
            "factor": 1000
        },
        {
            "initialUOM": "lb",
            "desiredUOM": "kg",
            "factor": 0.4536
        },
        {
            "initialUOM": "lb",
            "desiredUOM": "oz",
            "factor": 16
        },
        {
            "initialUOM": "lb",
            "desiredUOM": "g",
            "factor": 453.592
        },
        {
            "initialUOM": "g",
            "desiredUOM": "oz",
            "factor": 0.0353
        },
        {
            "initialUOM": "oz",
            "desiredUOM": "g",
            "factor": 28.3495
        },
        // ----- Area -----
        {
            "initialUOM": "acre",
            "desiredUOM": "ha",
            "factor": 0.4047
        },
        {
            "initialUOM": "ha",
            "desiredUOM": "acre",
            "factor": 2.4711
        },
        // ----- Volume -----
        {
            "initialUOM": "gal",
            "desiredUOM": "ltr",
            "factor": 3.7854
        },
        {
            "initialUOM": "gal",
            "desiredUOM": "floz",
            "factor": 128
        },
        {
            "initialUOM": "gal",
            "desiredUOM": "ml",
            "factor": 3785.41
        },
        {
            "initialUOM": "ltr",
            "desiredUOM": "gal",
            "factor": 0.2642
        },
        {
            "initialUOM": "ltr",
            "desiredUOM": "floz",
            "factor": 33.814
        },
        {
            "initialUOM": "ltr",
            "desiredUOM": "ml",
            "factor": 1000
        },
        {
            "initialUOM": "floz",
            "desiredUOM": "ml",
            "factor": 29.5735
        },
        {
            "initialUOM": "ml",
            "desiredUOM": "floz",
            "factor": 0.0338
        }
    ];

    let messagePrep = { UnitsofMeasurement: UomEnum };
    let messageBody = JSON.stringify(messagePrep);

    try {
        if (event != null) {
            console.log(event);

            if (event.event) {
                //Return sucess
                console.log("uom list");
            }
        }
        else {
            console.log('No event object');
        }
    }
    catch (e) {
        console.error(`Uncaught exception in webhook handler`, e);
    }
    context.done(null, messageBody); // SUCCESS with message
};



var UomEnum = [
    // ----- Mass -----
    {
        initialUOM: 'tn',
        desiredUOM: 't',
        factor: .9072
    },
    {
        initialUOM: 'tn',
        desiredUOM: 'lb',
        factor: 2000
    },
    {
        initialUOM: 'tn',
        desiredUOM: 'kg',
        factor: 907.185
    },
    {
        initialUOM: 't',
        desiredUOM: 'tn',
        factor: 1.1023
    },
    {
        initialUOM: 't',
        desiredUOM: 'lb',
        factor: 2204.62
    },
    {
        initialUOM: 't',
        desiredUOM: 'kg',
        factor: 1000
    },
    {
        initialUOM: 'kg',
        desiredUOM: 'lb',
        factor: 2.2046
    },
    {
        initialUOM: 'kg',
        desiredUOM: 'oz',
        factor: 35.274
    },
    {
        initialUOM: 'kg',
        desiredUOM: 'g',
        factor: 1000
    },

    {
        initialUOM: 'lb',
        desiredUOM: 'kg',
        factor: .4536
    },
    {
        initialUOM: 'lb',
        desiredUOM: 'oz',
        factor: 16
    },
    {
        initialUOM: 'lb',
        desiredUOM: 'g',
        factor: 453.592
    },
    {
        initialUOM: 'g',
        desiredUOM: 'oz',
        factor: .0353
    },
    {
        initialUOM: 'oz',
        desiredUOM: 'g',
        factor: 28.3495
    },
    // ----- Area -----
    {
        initialUOM: 'acre',
        desiredUOM: 'ha',
        factor: .4047
    },
    {
        initialUOM: 'ha',
        desiredUOM: 'acre',
        factor: 2.4711
    },
    // ----- Volume -----
    {
        initialUOM: 'gal',
        desiredUOM: 'ltr',
        factor: 3.7854
    },
    {
        initialUOM: 'gal',
        desiredUOM: 'floz',
        factor: 128
    },
    {
        initialUOM: 'gal',
        desiredUOM: 'ml',
        factor: 3785.41
    },
    {
        initialUOM: 'ltr',
        desiredUOM: 'gal',
        factor: .2642
    },
    {
        initialUOM: 'ltr',
        desiredUOM: 'floz',
        factor: 33.814
    },
    {
        initialUOM: 'ltr',
        desiredUOM: 'ml',
        factor: 1000
    },
    {
        initialUOM: 'floz',
        desiredUOM: 'ml',
        factor: 29.5735
    },
    {
        initialUOM: 'ml',
        desiredUOM: 'floz',
        factor: .0338
    }

];