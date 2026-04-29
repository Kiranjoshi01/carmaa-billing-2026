require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');
const logger = require('./config/logger');

const PORT = process.env.PORT || 5001;

// We are hardcoding this to be 100% sure there are no hidden spaces
const MONGODB_URI  = process.env.MONGODB_URI;;

mongoose.connect(MONGODB_URI)
  // then(() => {
  //   console.log("--- DATABASE CONNECTED SUCCESSFULLY ---");
  //   app.listen(PORT, () => {
  //     console.log(`--- SERVER RUNNING ON PORT ${PORT} ---`);
  //   });
  // })
  // .catch((err) => {
  //   console.log("--- DATABASE CONNECTION ERROR: ---", err);
// });
  .then(() => {
    console.log("--- DATABASE CONNECTED SUCCESSFULLY ---");

    // Only "wait forever" (listen) if we are on your laptop
    if (process.env.NODE_ENV !== 'production') {
      app.listen(PORT, () => {
        console.log(`--- SERVER RUNNING ON PORT ${PORT} ---`);
      });
    }
  })
  .catch((err) => {
    console.log("--- DATABASE CONNECTION ERROR: ---", err);
  });

// This line tells Vercel how to handle the login request
module.exports = app;