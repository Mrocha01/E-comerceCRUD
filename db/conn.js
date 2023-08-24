const { MongoClient} = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/testemongodb2';

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");
    } catch (err) {
        console.log(err.message);
    }
};

run();

module.exports = client;

// pesquisar o erro abaixo:
//!connect ECONNREFUSED ::1:27017 