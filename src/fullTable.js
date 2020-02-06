require('dotenv').config();

const {
    Client
} = require('pg')
const client = new Client({
    user: process.env.PG_DB_USER,
    password: process.env.PG_DB_PASS,
    host: process.env.PG_DB_HOST,
    port: process.env.PG_DB_PORT,
    database: "test_db"
})

client.connect()
    .then(() => console.log("Connected successfuly"))
    .then(() => client.query("insert into \"employees\" values ($1, $2, $3)", [100, 'Nina', 'Dzuban']))
    .then(() => client.query("select * from \"employees\""))
    .then(results => console.table(results.rows))
    .catch(e => console.log(e))
    .finally(() => client.end())