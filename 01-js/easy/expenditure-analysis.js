/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let uniqueArray = [];
  transactions.forEach((item) => {
    if (uniqueArray.some((item1) => item1.category === item.category)) {
      let itemPresent = uniqueArray.find(
        (item1) => item1.category === item.category
      );

      //approach 1
      // In JavaScript, objects are reference types, and when you push an object into an array, you are actually pushing a reference to that object. Therefore, if you modify the object later (even if you modify it outside the array), the changes will be reflected in the array.
      itemPresent.totalSpent = itemPresent.totalSpent + item.price;

      //approach 2
      // let updatedItem = {
      //   category: itemPresent.category,
      //   totalSpent: itemPresent.totalSpent + item.price,
      // };
      // // Replace the existing object in uniqueArray with the updated one
      // uniqueArray[uniqueArray.indexOf(itemPresent)] = updatedItem;
    } else {
      let product = {
        category: item.category,
        totalSpent: item.price,
      };
      uniqueArray.push(product);
    }
  });
  console.log("array", uniqueArray);
  return uniqueArray || [];
}

calculateTotalSpentByCategory([
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: "Clothing",
    itemName: "T-Shirt",
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: "Electronics",
    itemName: "Headphones",
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: "Clothing",
    itemName: "Jeans",
  },
]);

module.exports = calculateTotalSpentByCategory;
