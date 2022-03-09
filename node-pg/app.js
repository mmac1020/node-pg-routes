const pg = require('pg');
// URL has three parts: protocol://hostname/databaseName
const postgresURL = 'postgres://localhost/pg-node-rest'
const client = new pg.Client(postgresURL);

const prompt = (data) => {
  process.stdout.write(
    `Main Menu\nCommands:\n1. Select all users\n2. Select all puppies\n3. Exit\n> `
  );
};

const main = async (data) => {
  const entry = data.toString().trim();
  const [command] = entry.split(' ');
  // a Switch is basically an if/else-if/else block
  switch (command) {
    case '1':
      try {
        // const data = await client.query('SELECT * FROM users')
        // console.log(data);
        const {rows} = await client.query('SELECT * FROM users')
        rows.forEach((user) => {
          console.log(`User name: ${user.name} and User url: ${user.imageurl}`)
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
  await client.connect();
  prompt();
  process.stdin.on('data', main);
}

start();
