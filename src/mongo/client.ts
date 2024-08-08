import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_CONN_STRING!);
export const DATABASE = client.db("torus");
