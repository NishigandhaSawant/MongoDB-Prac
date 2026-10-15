# MongoDB Practice

Hands-on MongoDB practice using the **MongoDB for VS Code** extension and MongoDB Atlas. All queries run against a local/Atlas `ecommerce` database with three collections: `products`, `contacts`, and `orders`.

---

## What I Practiced

### CRUD Operations
- `insertOne` / `insertMany` — creating documents with nested objects and arrays
- `find` / `findOne` — basic reads with filters
- `updateOne` / `updateMany` — using `$set` and `$inc` operators
- `deleteOne` / `deleteMany` — removing documents by filter

### Read Queries
- Comparison operators: `$gt`, `$gte`, `$lt`, `$lte`
- Logical operators: `$and`, `$or`
- Projection — include/exclude specific fields
- Sorting, limiting, and skipping results
- Array queries — `$all`, element match
- `countDocuments` — counting with and without filters
- `$exists` — checking field presence

### Aggregation Pipeline
- `$match` — filter documents
- `$project` — reshape output
- `$group` — group by field with `$sum` and `$avg`
- `$sort` — sort aggregated results
- `$addFields` — compute new fields (e.g. `price × quantity`)
- `$limit` / `$skip` — pagination in pipelines
- `$count` — count matched documents

---

## File Structure

```
.
├── 01_setup_mongodb.js     # Initial data insert for the ecommerce DB
├── playground-2.mongodb.js # Full CRUD walkthrough (insert, update, delete)
├── reading.mongodb.js      # Read operations and query operators
└── aggregation.mongodb.js  # Aggregation pipeline examples
```

---

## Tools Used

- MongoDB Atlas (free tier)
- MongoDB for VS Code extension
- MongoDB Shell syntax (`.mongodb.js` playgrounds)
