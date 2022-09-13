// import { client } from "./dbconnect.js";



// export const displayReview = ( req, res ) => {
//     const { _id } = req.params;
//     client.connect((err) => {
//       if (err) {
//         res.status(500).send({ message: "This did not work" });
//         return;
//       }
//       const CommentObject = {
//         Email: req.body.Email,
//         Comment: req.body.Comment,
//       };
//       console.log(CommentObject, _id);
//       const collection = client.db("Final-Project").collection("hiking trails");
//       const trail = new ObjectId(_id);
  
//       collection.find({ Hiking_Trail:  }, { $push: {"Reviews":CommentObject} });
//     });
//     res.send({ message: "it worked" });
//   };
  