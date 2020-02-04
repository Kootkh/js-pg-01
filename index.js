require('dotenv').config();

const { Client } = require('pg');


const client = new Client({
    user: process.env.PG_DB_USER,
    password: process.env.PG_DB_PASS,
    host: process.env.PG_DB_HOST,
    port: process.env.PG_DB_PORT,
    database: "postgres",
})

client.connect()
    .then(() => console.log("Connected succefuly"))
    .catch(e => console.log("Error: ", e))
    .finally(() => client.end())