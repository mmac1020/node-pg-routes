const express = require('express');
const app = express();
const morgan = require('morgan');
const routes = require('./api')

// Parsing Forms
app.use(express.urlencoded({extended: false}))

// Parsing JSON
app.use(express.json());

app.use(morgan('dev'));

app.use(routes);

// What is this????
app.use((req, res, next) => {
  try {
    res.status(404).send('<h1> I do not have a mapping for this route :|</h1>');
  } catch (err) {
    next(err);
  }
});

// And what is this???
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.status || 500).send(err.message);
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
