import * as functions from "firebase-functions";

const ping = functions.https.onRequest((_, res) => {
  res.send("pong");
});

export default ping;
