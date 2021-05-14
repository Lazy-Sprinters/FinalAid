const {Storage} = require('@google-cloud/storage')
const path=require('path');

require('dotenv').config({path:path.resolve(__dirname,'../../.env')})

const storage=new Storage({
      projectId:process.env.PROJECT_ID,
      keyFilename:path.resolve(__dirname,`./${process.env.CONFIG_NAME}`)
})

const bucket=storage.bucket('gs://finalaid-b774c.appspot.com');
module.exports=bucket