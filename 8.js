//Q8 — MongoDB Products Queries
// Insert 10 documents
db.products.insertMany([
    { name: "Samsung TV", category: "electronics", price: 1500, stock: 5, brand: "Samsung" },
    { name: "Sofa", category: "furniture", price: 300, stock: 8, brand: "WoodCo" },
    { name: "Sugar", category: "food", price: 50, stock: 100, brand: "Tata" },
    { name: "Shirt", category: "clothing", price: 200, stock: 50, brand: "Nike" },
    { name: "Laptop", category: "electronics", price: 60000, stock: 3, brand: "Dell" },
    { name: "Table", category: "furniture", price: 450, stock: 12, brand: "IKEA" },
    { name: "Shoes", category: "clothing", price: 800, stock: 30, brand: "Adidas" },
    { name: "Rice", category: "food", price: 80, stock: 200, brand: "India Gate" },
    { name: "Speaker", category: "electronics", price: 1200, stock: 7, brand: "JBL" },
    { name: "Sunglasses", category: "accessories", price: 600, stock: 20, brand: "RayBan" }
]);

// a. Price above 500
db.products.find({ price: { $gt: 500 } });

// b. Stock less than 10
db.products.find({ stock: { $lt: 10 } });

// c. Price between 100 and 500
db.products.find({ price: { $gte: 100, $lte: 500 } });

// d. NOT electronics
db.products.find({ category: { $ne: "electronics" } });

// e. electronics OR furniture
db.products.find({ category: { $in: ["electronics", "furniture"] } });

// f. electronics AND price > 1000
db.products.find({ category: "electronics", price: { $gt: 1000 } });

// g. Neither food NOR clothing
db.products.find({ category: { $nin: ["food", "clothing"] } });

// h. Names starting with "S"
db.products.find({ name: /^S/ });

// i. Skip first 5, show next 10
db.products.find().skip(5).limit(10);

// j. Has a discount field
db.products.find({ discount: { $exists: true } });