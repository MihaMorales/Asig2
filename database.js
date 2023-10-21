const mongoose = require('mongoose');

const dbURI = 'mongodb://127.0.0.1:27017/Marketplace';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database.');
});

module.exports = mongoose; // Export the Mongoose object for use in other parts of your application
