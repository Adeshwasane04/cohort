function calculateTotalSpentByCategory(transactions) {
    const categoryTotals = {};
  
    transactions.forEach(transaction => {
      const { category, price } = transaction;
  
      // If category already exists, add the price to the total
      if (categoryTotals.hasOwnProperty(category)) {
        categoryTotals[category] += price;
      } else {
        // If category doesn't exist, create a new entry with the price
        categoryTotals[category] = price;
      }
    });
  
    // Convert the result to an array of objects
    const result = Object.keys(categoryTotals).map(category => ({
      category,
      totalSpent: categoryTotals[category],
    }));
  
    return result;
  }
  
  // Example usage:
  const transactions = [
    {
      id: 1,
      timestamp: 1656076800000,
      price: 10,
      category: 'Food',
      itemName: 'Pizza',
    },
    {
      id: 2,
      timestamp: 1656080400000,
      price: 20,
      category: 'Clothing',
      itemName: 'Shirt',
    },
    // Add more transactions as needed
  ];
  
  const totalSpentByCategory = calculateTotalSpentByCategory(transactions);
  console.log(totalSpentByCategory);
  