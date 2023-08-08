import { MongoClient } from "mongodb";
let db;

async function connectToDb(cb) {
    const client = new MongoClient('mongodb+srv://Test:Test%4029@cluster0.mpcar5n.mongodb.net/');
    await client.connect();

    db = client.db('react-blog-db');
    cb();
}

export { db, connectToDb };