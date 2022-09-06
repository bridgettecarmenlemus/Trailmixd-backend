import { ObjectID } from "bson";
import { client } from "./dbconnect.js";

export const addReview = (req, res) => {
    const {_id} = req.params 
  client.connect((err) => {
    if (err) {
      res.status(500).send({message: 'This did not work'});
      return;
    }

    const CommentObject = {
        Email: req.body.email,
        Comment: req.body.review
    }
    const collection = client.db("Final-Project").collection("hiking trails");
    const newId = new ObjectID(_id)
    collection.findOne({_id: newId}).then((document) => {
      console.log(document)
      if (document.Reviews.length) {
        document.Reviews.push(CommentObject)
      } else {
        document.Reviews = [CommentObject]
      }
      collection.updateOne(
        { _id: newId },
        { $push: document }
        
     )
    })

     res.send({message: "it worked"})
   
  });
};
