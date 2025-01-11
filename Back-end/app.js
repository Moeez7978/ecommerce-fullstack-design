const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const productRoute = require('./Routes/Productroutes');

// Configure dotenv to use 1.env
dotenv.config({ path: '1.env' });

const app = express();

console.log('MongoURI:', process.env.MONGO_URI); // Debugging line

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.use('/api/products', productRoute);

module.exports = app;
