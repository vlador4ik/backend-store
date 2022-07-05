import express from 'express';
import mongoose from 'mongoose';
import db from '../config/db.js';
const app = express();
const port = 3000;

//connect to DB
mongoose.connect(db.url)
.then(() => console.log("MongoDB database connection established successfully"))
.catch((err) => console.log('Error when try connect to DB', err))
const Products = mongoose.model('products', mongoose.Schema({
  name: String,
  image: String,
  id: String,
  description: String
}));
app.get('/api/products', async (req, res) => {
  
  const allProducts = await Products.find({});
  if(allProducts.length) {
    res.status(200);
    res.send(allProducts);
  } else {
    res.status(401);
    res.send({
      status: 'Error',
      description: 'Error when try fetch products'
    })
  }
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})