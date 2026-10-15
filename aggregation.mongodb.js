use('ecommerce');

// ==========================================
// SETUP: Insert sample data for aggregation
// ==========================================

db.sales.insertMany([
  { _id: 1, item: "Apple",  price: 10, quantity: 5,  category: "Fruit" },
  { _id: 2, item: "Banana", price: 5,  quantity: 10, category: "Fruit" },
  { _id: 3, item: "Carrot", price: 8,  quantity: 6,  category: "Vegetable" },
  { _id: 4, item: "Tomato", price: 6,  quantity: 8,  category: "Vegetable" },
  { _id: 5, item: "Mango",  price: 15, quantity: 3,  category: "Fruit" }
]);

// ==========================================
// AGGREGATION PIPELINE EXAMPLES
// ==========================================

// 1. $match — filter documents (like WHERE in SQL)
db.sales.aggregate([
  { $match: { category: "Fruit" } }
]);

// 2. $match + $project — filter and shape output
db.sales.aggregate([
  { $match: { category: "Fruit" } },
  { $project: { _id: 0, item: 1, price: 1 } }
]);

// 3. $group — group by category and sum quantity
db.sales.aggregate([
  {
    $group: {
      _id: "$category",
      totalQuantity: { $sum: "$quantity" },
      averagePrice: { $avg: "$price" }
    }
  }
]);

// 4. $sort — sort grouped results by totalQuantity descending
db.sales.aggregate([
  {
    $group: {
      _id: "$category",
      totalQuantity: { $sum: "$quantity" }
    }
  },
  { $sort: { totalQuantity: -1 } }
]);

// 5. $addFields — add a computed field (revenue = price * quantity)
db.sales.aggregate([
  {
    $addFields: {
      revenue: { $multiply: ["$price", "$quantity"] }
    }
  },
  { $project: { _id: 0, item: 1, revenue: 1 } }
]);

// 6. $limit + $skip — pagination in aggregation
db.sales.aggregate([
  { $match: { category: "Fruit" } },
  { $skip: 1 },
  { $limit: 2 }
]);

// 7. $count — count matching documents
db.sales.aggregate([
  { $match: { category: "Vegetable" } },
  { $count: "totalVegetables" }
]);