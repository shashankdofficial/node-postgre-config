const { Client } = require('pg');

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "12345",
    database: "nodetest"
})

client.connect();

module.exports = client;