use('ecommerce');

// ==========================================
// DATABASE RESET (run once to start fresh)
// ==========================================
db.dropDatabase();

// ==========================================
// INSERT — Create collections with sample data
// ==========================================

// Products collection
db.products.insertMany([
  {
    name: "Wireless Mouse",
    price: 799,
    category: "Electronics",
    stock: 120,
    ratings: 4.5,
    tags: ["computer", "accessory", "wireless"],
    createdAt: new Date()
  },
  {
    name: "Mechanical Keyboard",
    price: 2499,
    category: "Electronics",
    stock: 80,
    ratings: 4.8,
    tags: ["keyboard", "mechanical"],
    createdAt: new Date()
  },
  {
    name: "Gaming Laptop",
    price: 85999,
    category: "Computers",
    stock: 30,
    ratings: 4.6,
    tags: ["gaming", "laptop"],
    createdAt: new Date()
  }
]);

// Contacts collection
db.contacts.insertMany([
  { name: "Alice", message: "Loved your website!", phone: "9876543210", createdAt: new Date() },
  { name: "Bob", message: "Do you have discounts on laptops?", phone: "9123456789", createdAt: new Date() },
  { name: "Carol", message: "I want to cancel my order.", phone: "9988776655", createdAt: new Date() }
]);

// Orders collection
db.orders.insertMany([
  {
    orderId: "ORD001",
    user: "John Doe",
    products: [
      { name: "Wireless Mouse", quantity: 1, price: 799 },
      { name: "Mechanical Keyboard", quantity: 1, price: 2499 }
    ],
    total: 3298,
    status: "Delivered",
    createdAt: new Date()
  },
  {
    orderId: "ORD002",
    user: "Jane Smith",
    products: [
      { name: "Gaming Laptop", quantity: 1, price: 85999 }
    ],
    total: 85999,
    status: "Pending",
    createdAt: new Date()
  }
]);

// ==========================================
// UPDATE — Modify existing documents
// ==========================================

// Update stock of Wireless Mouse
db.products.updateOne(
  { name: "Wireless Mouse" },
  { $set: { stock: 100 } }
);

// Add a discount field to all Electronics
db.products.updateMany(
  { category: "Electronics" },
  { $set: { discount: 10 } }
);

// Increment price of Gaming Laptop by 1000
db.products.updateOne(
  { name: "Gaming Laptop" },
  { $inc: { price: 1000 } }
);

// ==========================================
// DELETE — Remove documents
// ==========================================

// Delete a specific contact
db.contacts.deleteOne({ name: "Carol" });

// Delete all contacts whose message mentions "cancel"
db.contacts.deleteMany({ message: /cancel/ });

// ==========================================
// VERIFY — Quick reads after CRUD
// ==========================================

db.products.find();
db.orders.find({ status: "Delivered" });
db.contacts.find();