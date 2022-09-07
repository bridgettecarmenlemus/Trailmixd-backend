import { ObjectId } from "mongodb";
import { client } from "./dbconnect.js";

export const addReview = (req, res) => {
  const { _id } = req.params;
  client.connect((err) => {
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

    collection.updateOne({ _id: newId }, { $push: {"Reviews":CommentObject} });
  });
  res.send({ message: "it worked" });
};
