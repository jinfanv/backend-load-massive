const { MongoClient} = require('mongodb')
const {DB_USER, DB_PASSWORD,DB_HOST,DB_NAME} = process.env

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

let connection

async function connectDB() {
    if (connection) {
        return connection
    }
    let client
    try {
        client = await MongoClient.connect(URL,{
            useNewUrlParser: true
        })
        connection = client.db(DB_NAME)
        console.log("Connect :)");
        
    } catch (error) {
        console.error('Could not connect to db ', error);
        process.exit(1)
    }
    return connection
}

module.exports = connectDB