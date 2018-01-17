const admin = require("firebase-admin");

//The account key to download on firebase
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "XXXXX"
});

//uid of the user you want to promote Admin
const uid = 'XXXXX';

admin.auth()
  .setCustomUserClaims(
  uid,
  { admin: true }
  ).then(() => {
    console.log('Promoted this user to admin')

    //In ordre to exit the script
    process.exit();
  });
