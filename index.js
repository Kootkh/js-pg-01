require('dotenv').config();

const { Client } = require('pg')

const client = new Client({
  user: process.env.PG_DB_USER,
  password: process.env.PG_DB_PASS,
  host: process.env.PG_DB_HOST,
  port: process.env.PG_DB_PORT,
  database: "test_db"
})

client.connect()
.then( () => console.log("Connected succefuly") )
.then( () => client.query("select * from \"hardware\" where \"vendor_name\" = $1", ["yealink"]) )
.then(results => console.table(results.rows))
.catch( e => console.log("Error", e) )
.finally( () => client.end() )