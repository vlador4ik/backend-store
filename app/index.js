import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
const app = express();

//connect to DB
mongoose.connect(process.env.DB_URL)
.then(() => console.log("MongoDB database connection established successfully"))
.catch((err) => console.log('Error when try connect to DB', err))
const Products = mongoose.model('items', mongoose.Schema({
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
      status: 401,
      description: 'Error when try fetch products'
    })
  }
    
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})