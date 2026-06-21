const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const products = [
  { name: "Wireless Headphones", price: 2999, description: "Premium noise cancelling", category: "Electronics", image: "https://picsum.photos/id/20/300/200" },
  { name: "Smart Watch", price: 4999, description: "Fitness tracking & notifications", category: "Electronics", image: "https://picsum.photos/id/60/300/200" },
  { name: "Denim Jacket", price: 1899, description: "Classic blue denim", category: "Fashion", image: "https://picsum.photos/id/201/300/200" },
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('✅ Products seeded!');
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
