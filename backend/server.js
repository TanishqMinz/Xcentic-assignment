const products = require('./products')
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/products', (req, res) => {
  res.json(products);
});

/* Selects a product based on the id given when called */
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

/* Traverses through each category to extract their categories. Filter removes any null/undefined values while making a Set makes sure to have no duplicates.*/
app.get('/api/categories', (req, res) => {
    const categories = [...new Set(products.map(p => p.category).filter(Boolean))]; 
    res.json(categories);
});
  
/* Sends a list of products where the category matches the specified category */
app.get('/api/products/category/:category', (req, res) => {
    const category = req.params.category;
    const categoryProducts = products.filter(p => p.category === category);
    res.json(categoryProducts);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});