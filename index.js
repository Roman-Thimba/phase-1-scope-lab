// Write your solution in this file!
// 1. Declare a global variable customerName using var and assign it the value 'bob'
var customerName = 'bob';

// 2. Create a function to uppercase the customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Create a function that declares a global variable bestCustomer and assigns 'not bob' to it
function setBestCustomer() {
  bestCustomer = 'not bob'; // no var, let, or const makes this global (bad practice but intentional here)
}

// 4. Create a function to overwrite the bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Declare a constant called leastFavoriteCustomer
const leastFavoriteCustomer = 'someone';

// 6. Create a function to attempt to change the leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  // This will throw an error because you can't reassign a constant
  leastFavoriteCustomer = 'someone else';
}
