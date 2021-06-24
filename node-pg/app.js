const pg = require('pg');
// protocol :// hostname / database name
const postgresUrl = 'postgres://localhost/pg-node-rest';
const client = new pg.Client(postgresUrl);

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
      const users = await client.query("SELECT * FROM USERS WHERE name='Mac';");
      // console.log(users.rows);
      console.log(users);
      users.rows.forEach((user) => {
        console.log(user);
      });
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
  console.log('We have connected to the database!');
  prompt();
  process.stdin.on('data', main);
}

start();
