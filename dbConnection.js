const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://samarakoonamila98:admin@cluster0.et63378.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

async function connect() {
    await client.connect();
}

module.exports = client;