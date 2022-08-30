// import mongoClient
import { client } from "./dbconnect.js";

//get all hikingtrails: use the GET function
export const getHikingTrails = (req, res) => {
  client.connect((err) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    const collection = client.db("Final-Project").collection("hiking trails");
    collection.find().toArray((err, result) => {
      if (err) res.status(500).send(err);
      if (result) res.json(result);
      client.close();
    });
  });
};