const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product'); // Adjust the path accordingly

dotenv.config({ path: '1.env' });

console.log('MongoURI:', process.env.MONGO_URI); // Debugging line

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const sampleProducts = [
  { id: '1', name: 'Oppo A52', price: 10000, image: 'path/to/image1.jpg', description: 'Description 1', category: 'Mobile and accessories', stock: 10 },
   { id: '2', name: 'Product 2', price: 200, image: 'path/to/image2.jpg', description: 'Description 2', category: 'Category 2', stock: 20 }, { id: '3', name: 'Samsung S22', price: 200000, image: 'path/to/image2.jpg', description: 'Description 2', category: 'Mobile and accessories', stock: 20 }, { id: '4', name: 'Infinix Note 10', price: 20000, image: 'path/to/image2.jpg', description: 'Description 2', category: 'Mobile and accessories', stock: 20 }, //
  // Ensure all products have unique IDs
];

const populate = async () => {
  try {
    // Remove existing products to prevent duplicates
    await Product.deleteMany({});
    await Product.insertMany(sampleProducts);
    console.log('Data successfully populated!');
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
};

populate();
