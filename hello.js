const input = require('sync-input');

// Function to display the currency conversion message
function displayCurrencyConversionMessage() {
    console.log(`Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`)
}

// Function to convert USD to the specified currency
function convertUSDToCurrency(fromCurrency, toCurrency, amount) {
    const conversionRates = {
        JPY: 113.5,
        EUR: 0.89,
        RUB: 74.36,
        USD: 1,
        GBP: 0.75
    };

    // Use the unary plus operator to convert the input to a number
    const numericAmount = +amount;

    // Check if the amount is a number and greater than or equal to 1
    if (isNaN(numericAmount)) {
        console.log("The amount has to be a number");
        return;
    }

    if (numericAmount < 1) {
        console.log("The amount cannot be less than 1");
        return;
    }

    // Perform the conversion and round the result to 4 decimal places
    const result = (numericAmount * conversionRates[toCurrency] / conversionRates[fromCurrency]).toFixed(4);

    // Output the result in the expected format
    console.log(`Result: ${numericAmount} ${fromCurrency} equals ${result} ${toCurrency}`);
    // Output the result in the expected format
}

// Main program
function main() {
    while (true) {
        displayCurrencyConversionMessage();
        console.log("What do you want to do?");
        console.log("1-Convert currencies 2-Exit program");

        const choice = input();

        if (choice === '1') {
            console.log("What do you want to convert?");
            const currencyFrom = input("From:").toUpperCase();
            // Get currency input
            // Get amount input
            const conversionRates = {
                JPY: 113.5,
                EUR: 0.89,
                RUB: 74.36,
                USD: 1,
                GBP: 0.75
            };
            if (!conversionRates.hasOwnProperty(currencyFrom)) {
                console.log("Unknown currency.");
                continue;
            }
            const currency = input("To:").toUpperCase();

            for (let conversionRatesKey in conversionRates) {
                if (conversionRatesKey === currency) {
                    const amount = input("Amount:");
                    convertUSDToCurrency(currencyFrom, currency, amount);
                } else {
                    console.log("Unknown currency.");
                }
            }

            // Perform the conversion
        } else if (choice === '2') {
            console.log("Have a nice day!");
            break;
        } else {
            console.log("Unknown input. Please choose 1 or 2.");

        }
    }}

// Run the main progra
main();