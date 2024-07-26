const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://jgromerom89:Sk12071989@cluster0.usmokk9.mongodb.net/BlogMERN?retryWrites=true&w=majority', {
     
      });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;