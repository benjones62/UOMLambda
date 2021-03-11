let debuggingLog = true;

if (debuggingLog) { console.log('Loading the Calc function'); }

exports.handler = function (event, context, callback) {

    if (debuggingLog) { console.log('Received event:', JSON.stringify(event, null, 2)); }

    if (event.initialValue === undefined || event.initialUOM === undefined || event.desiredUOM === undefined) {
        callback("400 Invalid Input");
    }

    if (event != null) {

        if (debuggingLog) { console.log(event); }

        var res = {};

        // Scrubbing values
        //var sanitizer = require('sanitize')();
        res.initialValue = event.initialValue;
        res.initialUOM = event.initialUOM;
        res.desiredUOM = event.desiredUOM;

        // Validating Initial Value | isNaN and === null may be redundant
        if (res.initialValue === null || isNaN(res.initialValue) || res.initialValue <= 0) {
            callback("400 Invalid Initial Value - Must be a number greater than 0");
        }

        // Checks UOM's for numbers or null
        if (res.initialUOM === null || res.desiredUOM === null) {
            callback("400 UOM's cannot be null or contain numbers");
        }

        // UOM's sanitized and validated 
        res.initialUOM = res.initialUOM.toLowerCase();
        res.desiredUOM = res.desiredUOM.toLowerCase();

        var conversionMappings = [
            // ----- Mass -----
            {
                initialUOM: 't',
                desiredUOM: 'mt',
                factor: .9072
            },
            {
                initialUOM: 't',
                desiredUOM: 'lb',
                factor: 2000
            },
            {
                initialUOM: 't',
                desiredUOM: 'kg',
                factor: 907.185
            },
            {
                initialUOM: 'mt',
                desiredUOM: 't',
                factor: 1.1023
            },
            {
                initialUOM: 'mt',
                desiredUOM: 'lb',
                factor: 2204.62
            },
            {
                initialUOM: 'mt',
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
            },

        ];

        // Checking userinput against our object array
        var confirmInitialUOM = false;
        for (var i = 0; i < conversionMappings.length; i++) {
            if (conversionMappings[i].initialUOM == res.initialUOM) {
                confirmInitialUOM = true;
                break;
            }
        }

        // Checking userinput against our object array
        var confirmDesiredUOM = false;
        for (var i = 0; i < conversionMappings.length; i++) {
            if (conversionMappings[i].desiredUOM == res.desiredUOM) {
                confirmDesiredUOM = true;
                break;
            }
        }

        if (confirmInitialUOM && confirmDesiredUOM) {

            try {
                if (event.event) { if (debuggingLog) { console.log("Ran conversion"); } }

                // Returns array of initial UOM's
                var initialArray = conversionMappings.filter(function (item) {
                    return item.initialUOM == res.initialUOM;
                });

                if (debuggingLog) { console.log(initialArray); }

                // Returns array of 1 object with initial & desired UOM
                var desiredArray = initialArray.filter(function (item) {
                    return item.desiredUOM == res.desiredUOM;
                });

                // Converts properties of object within array to individual objects for manipulation
                let desiredUomObject = desiredArray.map(a => a.desiredUOM);
                let factorObject = desiredArray.map(a => a.factor);

                res.result = (res.initialValue * factorObject) + ' ' + desiredUomObject;
            }
            catch (e) {
                console.error(`Uncaught exception in webhook handler`, e);
            }
        }
        else {
            callback("UOM's not in our directory");
        }
    }
    else {
        if (debuggingLog) { console.log('No event object'); }
    }
    context.done(null, res); // SUCCESS with message

    callback(null, res);
};