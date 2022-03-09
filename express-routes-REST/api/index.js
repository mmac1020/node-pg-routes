const express = require('express');
const router = express.Router();

const userRoutes = require('./users');
const dogRoutes = require('./dogs');

router.get('/', (req, res, next) => {
  res.send('<h1>Welcome to the Home Page!</h1>');
});

router.use(userRoutes);

router.use(dogRoutes);

module.exports = router;
