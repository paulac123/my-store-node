/*const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'paula',
    password: '123456',
    database: 'my_store',
  });
  await client.connect();
  return client;
}

module.exports = getConnection;*/
const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl:
      process.env.NODE_ENV === 'production'
        ? { rejectUnauthorized: false }
        : false,
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
