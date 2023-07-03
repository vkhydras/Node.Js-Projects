const express = require('express');
const { validationResult } = require('express-validator');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('DB connected');
  })
  .catch((err) => {
    console.log(`DB connection error: ${err.message}`);
  });

mongoose.connection.on('error', (err) => {
  console.log(`DB connection error: ${err.message}`);
});

const postRoutes = require('./routes/post');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', postRoutes);

// Custom validation middleware
app.use((req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
});

const port = process.env.PORT || 8083;

app.listen(port, () => console.log(`A node.js API is listening on port: ${port}`));
