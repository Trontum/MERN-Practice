const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27018/";
const client = new MongoClient(uri);
 
async function main() {
    console.log("Connection is successful")
    const database = await client.db('catalog');
    const books = await database.collection('books');
    return books
}
 
async function getAllBooks() {
    try {
        const collection = await main()
        let books = await collection.find().toArray()
        return books
    } finally{
        // client.close()
    }
}
async function getBookDetails(title) {
    try {
        const collection = await main()
        let books = await collection.find({title:title}).toArray();
        return books
    } finally{
        // client.close()
    }
}
async function getCategoryBooks(category) {
    try {
        const collection = await main()
        let books = await collection.find({category}).toArray();
        return books
    } finally{
        // client.close()
    }
}
async function addBook(book) {
    try {
        const collection = await main()
        // let books = await collection.find({category}).toArray();
        let insertStatus=await collection.insertOne(book);
        return insertStatus.acknowledged;
    } finally{
        // client.close()
    }
}
async function deleteBook(title) {
    try {
        const collection = await main()
        // let books = await collection.find({category}).toArray();
        let deleteStatus=await collection.deleteOne({title});
        return deleteStatus.deletedCount;
    } finally{
        // client.close()
    }
}
async function updateBook(title,price) {
    try {
        const collection = await main()
        // let books = await collection.find({category}).toArray();
        // console.log(price);
        let updateStatus=await collection.updateOne({title:title},{$set:{price:price}});
        return updateStatus.matchedCount;
    } finally{
        // client.close()
    }
}
 
module.exports={getAllBooks,getBookDetails,getCategoryBooks,addBook,deleteBook,updateBook}