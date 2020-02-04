require('dotenv').config();

const { Client } = require('pg');


const client = new Client({
    user: process.env.PG_DB_USER,
    password: process.env.PG_DB_PASS,
    host: process.env.PG_DB_HOST,
    port: process.env.PG_DB_PORT,
    database: "test_db"
})

client.connect()
    .then(() => console.log("Connected successfuly"))
    .then(() => client.query("select * from \"employees\" where \"employees_lastname\" = $1", ["Veprikov"]))
    .then(results => console.table(results.rows))
    .catch(e => console.log("Error: ", e))
    .finally(() => client.end())