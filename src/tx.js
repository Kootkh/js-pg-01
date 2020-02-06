require('dotenv').config();

const { Client } = require('pg')
const Cursor = require('pg-cursor')

const client = new Client({
    user: process.env.PG_DB_USER,
    password: process.env.PG_DB_PASS,
    host: process.env.PG_DB_HOST,
    port: process.env.PG_DB_PORT,
    database: "test_db"
})

execute()

async function execute() {
    try {
        const cursor = new Cursor("select * from \"employees\"")
        await client.connect()
        const cursorFilled = await client.query(cursor)
        cursorFilled.read(5, (err, rows) => {
            console.table(rows)
        })
    } catch (ex) {
        console.log(`Failed to execute something ${ex} this is not cool`)

    } finally {
        await client.end()
        console.log("Cleaned.")
    }
}