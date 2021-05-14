const admin=require('firebase-admin');
const path=require('path');

require('dotenv').config({path:path.resolve(__dirname,'../../.env')})

const serviceAccount=require(path.resolve(__dirname,`./${process.env.CONFIG_NAME}`));

admin.initializeApp({
      credential:admin.credential.cert(serviceAccount)
});

const db=admin.firestore();

module.exports=db;
