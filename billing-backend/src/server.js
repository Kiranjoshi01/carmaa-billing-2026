require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');
const logger = require('./config/logger');

const PORT = process.env.PORT || 5001;

// We are hardcoding this to be 100% sure there are no hidden spaces
const MONGODB_URI = 'mongodb://127.0.0.1:27017/carmaa_billing';

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log("--- DATABASE CONNECTED SUCCESSFULLY ---");
    app.listen(PORT, () => {
      console.log(`--- SERVER RUNNING ON PORT ${PORT} ---`);
    });
  })
  .catch((err) => {
    console.log("--- DATABASE CONNECTION ERROR: ---", err);
  });