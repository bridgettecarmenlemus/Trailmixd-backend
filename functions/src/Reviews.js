import { ObjectId } from "mongodb";
import { client } from "./dbconnect.js";
import { getHikingTrails } from "./hikingtrails.js";

export const addReview = (req, res) => {
  const { _id } = req.params;
  client.connect(async (err) => {
    if (err) {
      res.status(500).send({ message: "This did not work" });
      return;
    }
    const CommentObject = {
      Email: req.body.Email,
      Comment: req.body.Comment,
    };
    console.log(CommentObject, _id);
    const collection = client.db("Final-Project").collection("hiking trails");
    const newId = new ObjectId(_id);

    await collection.updateOne({ _id: newId }, { $push: {"Reviews":CommentObject} });
    res.status(201);
    getHikingTrails(req, res);
  });
};
