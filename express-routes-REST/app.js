const express = require('express');
const app = express();

// This is for receiving form data via POST request body
app.use(express.urlencoded({extended: false}))

// This is for receiving JSON data via POST/PUT request body
app.use(express.json());

app.use((req, res, next) => {
  req.user = {name: 'mac'}
  // req.body;
  next();
})

app.get('/', (req, res, next) => {
  console.log(req.user);
  res.send('<h1>Welcome to the Home Page!</h1>');
});

// Require always looks for an index.js by default
const router = require('./api');

// const router = require('./api/index');

// app.use('/api', router);

app.use('/api', require('./api'));





// What is this????
// This is a 404 handler
app.use((req, res, next) => {
  res.status(404).send('<h1> I do not have a mapping for this route :|</h1>');
});

// And what is this???
// This is a custom error handler
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.status || 500).send(err.message);
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
