import * as admin from "firebase-admin";

var serviceAccount = require("../../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://todo-web-ryotogashi.firebaseio.com"
});

const firestore = admin.firestore();

export default firestore;
