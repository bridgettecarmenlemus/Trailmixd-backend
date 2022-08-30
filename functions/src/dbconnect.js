//import MongoClient and ServerApiVersion form MongoDB

import { MongoClient, ServerApiVersion } from "mongodb";

// import secret uri
import { uri } from "../secret.js";

//create new MongoClient instance and export it
export const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});


// in the code above, we imported the MongoClient class, and also the uri which is the connection string we exported earlier