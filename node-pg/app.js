const pg = require('pg');

// http://${location}:${port}
// protocol://location/dbName
const POSTGRES_URL = 'postgres://localhost/pg-node-rest'
const client = new pg.Client(POSTGRES_URL);
// const client2 = new pg.Client(otherURL)

const prompt = (data) => {
  process.stdout.write(
    `Main Menu\nCommands:\n1. Select all users\n2. Select all puppies\n3. Exit\n> `
  );
};

const main = async (data) => {
  const entry = data.toString().trim();
  const [command, arg] = entry.split(' ');
  switch (command) {
    case '1':
      try {
        const data = await client.query('SELECT name from users');
        data.rows.forEach((row) => {
          console.log(row);
        })
      } catch (err) {
        console.log(err);
      }
      break;
    case '2':
      break;
    case '3':
      process.exit(1);
    default:
      prompt('not valid command');
  }
  prompt();
};

async function start() {
  try {
    await client.connect();
    console.log('We are connected to postgres');
    prompt();
    process.stdin.on('data', main);
  } catch (err) {
    console.log(err);
  }
}

start();
