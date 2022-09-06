import functions from 'firebase-functions'
import express from 'express';
import cors from 'cors';
import { getHikingTrails }  from './src/hikingtrails.js'
import { addReview } from "./src/Reviews.js";

const app = express();
app.use(cors())
app.use(express.json())

app.get('/hikingtrails', getHikingTrails)
app.post("/hikingtrails/:_id", addReview);

app.get('/test', (req, res) => res.send({ success: true, message: 'API is working!' }))

export const api = functions.https.onRequest(app);


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
