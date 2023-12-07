/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
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
