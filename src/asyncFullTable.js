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

execute()

async function execute() {
    try {

        await client.connect()
        console.log("Connected successfully.")
            //await client.query("insert into employees values (1, 'John')")

        const {
            rows
        } = await client.query("select * from \"employees\"")
        console.table(rows)

    } catch (ex) {
        console.log(`Something wrong happend ${ex}`)
    } finally {
        await client.end()
        console.log("Client disconnected successfully.")
    }

}