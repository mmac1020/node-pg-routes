const express = require('express');

// DON'T DO THIS
// const app = express();

// Basically acts as a sub-app.
// ROUTER IS A MIDDLEWARE
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('<h1>Welcome to the All Users Page!</h1>');
});

router.get('/:id', (req, res, next) => {
  res.send('<h1>Welcome to the Single Users Page!</h1>');
});

router.post('/', (req, res, next) => {
  res.json('You tried to create a user');
});

router.put('/:id', (req, res, next) => {
  res.json('You tried to update a user');
});

router.delete('/:id', (req, res, next) => {
  res.json('You tried to delete a user');
});

module.exports = router;
