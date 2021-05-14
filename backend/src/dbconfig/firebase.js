const admin=require('firebase-admin');
const path=require('path');

const serviceAccount=require(path.resolve(__dirname,'./finalaid-b774c-firebase-adminsdk-868iw-bb527c64a2.json'));

admin.initializeApp({
      credential:admin.credential.cert(serviceAccount)
});

const db=admin.firestore();

module.exports=db;
