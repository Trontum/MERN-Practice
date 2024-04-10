const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);


async function run() {
  try {
    const database = client.db('mongoDatabase');
    const movies = database.collection('Employees');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'One Piece' };
    const movie = await movies.find().toArray();
    const employee={empid:2,name:"Mr. x"}
    const result=await movies.insertOne(employee);


    console.log(movie);
    console.log(result);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);