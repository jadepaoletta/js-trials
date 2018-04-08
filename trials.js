// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

phoneNumbers.set("home", "510-867-5309");
phoneNumbers.set("mobile", "415-555-1212");
phoneNumbers.set("business", "415-123-4567");

function accountInformation(acctName, acctNum, busName){
    console.log("Account Holder Name: " + acctName);
    console.log("Account Holder Number: " + acctNum);
    console.log("Business Name: " + busName);
}

accountInformation(accountHolder, accountNumber, businessName);
// Add some phone numbers to our map



// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information


// Add function to print all addresses, including a header
function printAddresses(addressList){
    console.log("Addresses:");
    for(let item of addressList) {
        console.log(item);
    }
}

printAddresses(addresses);
// Add function to print phone types and numbers

function printNumbers(phoneNums){
    console.log("Phone Numbers:");
    for(let num of phoneNums){
        console.log(num[0] + ": " + num[1]);
    }
}

printNumbers(phoneNumbers);

// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
const transactionMap = new Map();

// Add function to add transactions
function addTransaction(date, amount){
    transactionMap.set(date, amount);
}

// Use the function to add transactions
transactionMap.set("May-2", -500);
transactionMap.set("May-13", 1200);
transactionMap.set("May-15", -100);
transactionMap.set("May-21", -359);
transactionMap.set("May-29", 2200);

// Add function to show balance status
function showBalanceStatus(amount) {
    if(amount<=0){
        console.log("YOU ARE OVERDRAWN");
    }
    else if(amount<=20){
        console.log("Warning: You are close to zero balance!");
    }
    else {
        console.log("Thank you for your business.");
    }
}

function showTransactions(trans, startBalance){

    console.log(startBalance);
    let currentBalance;

    for (let transaction of trans){
        console.log(transaction[0]);
        if (transaction[1] > 0 ){
            console.log("deposit");
        }
        else{
            console.log("withdrawal");
        }

        currentBalance = startBalance + transaction[1];

        if (currentBalance < 0) {
            currentBalance = currentBalance - 25;
            console.log("You are overdrawn, you have been charged a NSF fee of $25.")
        }

        console.log("Amount changed: " + transaction[1] + ", Current Balance: " + currentBalance);
    }

    console.log("Your current balance is " + currentBalance);
    console.log(showBalanceStatus(currentBalance));

    return currentBalance;
}
// Add function to show transactions


// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info
const customer = {
    "Account Holder": accountHolder,
    "Account Number": accountNumber,
    "Business Name": businessName,
    "Addresses": addresses,
    "Phone Numbers": phoneNumbers,
    "Transactions": transactionMap,
    "Starting Balance": 26000
};

// Function to add customer attributes
function addCustomerProperty(propertyName,propertyValue){
    customer[propertyName] = propertyValue;
}

// Add attributes for this user
addCustomerProperty("Favorite Melon","Cantaloupe");
addCustomerProperty("Number of Pets",0)

// ///////////////////////////////////////////////////////
// Getting a Business Loan

function interestCalculator(customerObj, annualIncome){

    let interestRate;
    let preferredCustomer = false;

    if (customerObj["Favorite Melon"] === "Casaba" || customerObj["Number of Pets"] > 5){
        preferredCustomer = true;
    }

    if (annualIncome < 100000 && preferredCustomer){
        interestRate = 0.05;
    }
    else if (annualIncome < 100000 && preferredCustomer == false){
        interestRate = 0.08;
    }

    else if (annualIncome < 200000 && preferredCustomer){
        interestRate = 0.04;
    }
    else if (annualIncome < 200000 && preferredCustomer == false){
        interestRate = 0.07;
    }
    else{
        interestRate = 0.04;
    }

    console.log(interestRate);

    customer.preferredCustomer = preferredCustomer;
    return preferredCustomer;

}
// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report
function customerReport(customer){
    // let preferredCustomer;
    let startBalance = 26000;
    let currentBalance = showTransactions(transactionMap, startBalance);
    let annualIncome;

    console.log(`Customer Name: ${customer['Account Holder']}`);
    console.log(`Customer Account Number: ${customer['Account Number']}`);
    printNumbers(customer["Phone Numbers"]);
    printAddresses(customer["Addresses"]);
    console.log(`Customer Starting Balance: ${startBalance}`);

    console.log(`Customer Ending Balanc: ${currentBalance}`);
    if (customer.preferredCustomer){
        console.log("Congratulations on being a PREMIER CUSTOMER!");
    }
}


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week


// Add a function for weekly hours




