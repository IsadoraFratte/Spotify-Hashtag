import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://isadoraimersao:pEqVi73ctECquDBl@cluster0.fg9fgo6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");

