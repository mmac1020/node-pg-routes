const express = require('express');
const app = express();

const client = require('./db/postgres-client');

// This is a "body parser" to tell express that we will data from a FORM!!!!
app.use(express.urlencoded({ extended: false }));

// This is a "body parser" to tell express that we expect JSON to be on our body
app.use(express.json());

// App.use will run the "required" routes whenever a request comes in with the prefix "users"
// localhost:8080/users
// localhost:8080/dogs
app.use('/users', require('./api/users'));
app.use('/dogs', require('./api/dogs'))

app.get('/', (req, res, next) => {
  res.send('<h1>Welcome to the Home Page!</h1>');
});

// What is this????
app.use((req, res, next) => {
  res.status(404).send('<h1> I do not have a mapping for this route :|</h1>');
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
