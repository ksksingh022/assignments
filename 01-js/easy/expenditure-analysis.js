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
*/

function calculateTotalSpentByCategory(transactions) {
  let map = {}
  for (let i=0;i<transactions.length;i++){
      transaction = transactions[i];
    if (transaction['category'] in map){
      map[transaction['category']] += transaction['price'];
    }
    else{
      map[transaction['category']] = transaction['price'];
    }
  }
  let outputList = []
  console.log(map)
  for (let expenses in map){
    temp = {'category':expenses,'totalSpent':map[expenses]};
    outputList.push(temp);
  }
  return outputList;
}

module.exports = calculateTotalSpentByCategory;
