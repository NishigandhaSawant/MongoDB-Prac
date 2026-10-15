use('ecommerce');

// --- Basic Read ---

// Find all products
db.products.find();

// Find one document
db.products.findOne({ category: "Electronics" });

// Find by exact match
db.products.find({ name: "Wireless Mouse" });

// --- Comparison Operators ---

// Price greater than 1000
db.products.find({ price: { $gt: 1000 } });

// Price between 500 and 3000
db.products.find({ price: { $gte: 500, $lte: 3000 } });

// Stock less than 50
db.products.find({ stock: { $lt: 50 } });

// --- Logical Operators ---

// Electronics category AND rating above 4.5
db.products.find({ $and: [{ category: "Electronics" }, { ratings: { $gt: 4.5 } }] });

// Price below 1000 OR above 50000
db.products.find({ $or: [{ price: { $lt: 1000 } }, { price: { $gt: 50000 } }] });

// --- Projection (include / exclude fields) ---

// Show only name and price, exclude _id
db.products.find({}, { _id: 0, name: 1, price: 1 });

// Show all except createdAt
db.products.find({}, { createdAt: 0 });

// --- Sort, Limit, Skip ---

// Sort by price ascending
db.products.find().sort({ price: 1 });

// Sort by rating descending
db.products.find().sort({ ratings: -1 });

// Top 2 most expensive products
db.products.find().sort({ price: -1 }).limit(2);

// Skip first result (pagination style)
db.products.find().sort({ price: 1 }).skip(1).limit(2);

// --- Array Queries ---

// Products tagged with "wireless"
db.products.find({ tags: "wireless" });

// Products that have ALL of these tags
db.products.find({ tags: { $all: ["gaming", "laptop"] } });

// --- Count ---

// Total number of products
db.products.countDocuments();

// Count only Electronics
db.products.countDocuments({ category: "Electronics" });

// --- Existence / Type Check ---

// Documents where tags field exists
db.products.find({ tags: { $exists: true } });

// --- Orders collection reads ---

// All orders
db.orders.find();

// Orders with status "Delivered"
db.orders.find({ status: "Delivered" });

// Orders where total is above 5000
db.orders.find({ total: { $gt: 5000 } });

// Get specific fields from orders
db.orders.find({}, { _id: 0, orderId: 1, user: 1, status: 1, total: 1 });