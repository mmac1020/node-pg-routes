const pg = require('pg');
const postgresUrl = 'postgres://localhost/pg-node-rest';
const client = new pg.Client(postgresUrl);

const connect = async () => {
  try {
    await client.connect();
  } catch (err) {
    console.log('The client connection to postgres failed');
    console.log(err.stack);
  }
};

connect();

module.exports = client;
