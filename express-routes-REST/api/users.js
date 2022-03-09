const express = require('express');
const router = express.Router();

router.get('/users/', (req, res, next) => {
  // throw new Error('BROKEN :(');
  res.send('<h1>Welcome to the All Users Page!</h1>');
});

router.get('/users/:id', (req, res, next) => {
  res.send('<h1>Welcome to the Single Users Page!</h1>');
});

router.post('/users/', (req, res, next) => {
  console.log(req.body);
  res.json('You tried to create a user');
});

router.put('/users/:id', (req, res, next) => {
  res.json('You tried to update a user');
});

router.delete('/users/:id', (req, res, next) => {
  res.json('You tried to delete a user');
});

module.exports = router;
