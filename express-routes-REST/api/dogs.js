const express = require('express');
const router = express.Router();

router.get('/dogs/', (req, res, next) => {
  res.send('<h1>Welcome to the All Dogs Page!</h1>');
});

router.get('/dogs/:id', (req, res, next) => {
  res.send('<h1>Welcome to the Single Dog Page!</h1>');
});

module.exports = router;
