require('dotenv').config();
const {
  API_MONGO
} = process.env;

const mongoose = require('mongoose');


const connectDB = async () => {
  try {
    await mongoose.connect(API_MONGO, {
     
      });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;