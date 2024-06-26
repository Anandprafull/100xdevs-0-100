/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
    npx jest ./tests/expenditure-analysis.test.js


function calculateTotalSpentByCategory(transactions) {
  // Write your code here
    

  return [];
 }*/

// Define a function to calculate the total amount spent by category from a list of transactions
function calculateTotalSpentByCategory(transactions) {
  // Log the transactions to the console for debugging or verification
  console.log(transactions);
  // Initialize an empty object to hold the total spent by each category
  const totals = {};
  // Iterate over each transaction in the transactions array
  transactions.forEach((transaction) => {
    // Destructure the category and price from the current transaction
    const { category, price } = transaction;
    // If the category does not exist in the totals object, add it with the current price
    if (!totals[category]) {
      totals[category] = price;
    } else {
      // If the category already exists, increment its total by the current price
      totals[category] += price;
    }
  });

  // Initialize an empty array to hold the result
  const result = [];
  // Iterate over each category key in the totals object
  Object.keys(totals).forEach((category) => {
    // Push an object with the category and its total spent into the result array
    result.push({ category: category, totalSpent: totals[category] });
  });
  // Return the result array containing the total spent by each category
  return result;
}

module.exports = calculateTotalSpentByCategory;
