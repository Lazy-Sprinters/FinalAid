const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const db=require('./src/dbconfig/firebase');
const sgMail=require('@sendgrid/mail');
const utilityRouter = require("./src/routers/utilityRouter");
const orgRouter=require('./src/routers/organization');

const app = express();

app.use(morgan("dev"));

app.use(express.json({ limit: "10mb", extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(cors()); //Cross Origin Resource Sharing

app.use("/utility", utilityRouter);
app.use("/org",orgRouter);

require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

app.use((req, res, next) => {
  const err = new Error("Endpoint missing");
  err.status = 404;
  next(err);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    success: false,
    code: 400,
    message: error.message,
    response: null,
  });
});

const port = process.env.PORT || 5000;

app.listen(port, (req, res) => {
  console.log("Fired Up! @ " + port);
});


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

setInterval(async ()=>{
  const listofemails=await db.collection('Subscribers').get();
  if (!listofemails.empty){
    const pendingsendouts=await db.collection('Requests').where('notificationssned','==',false).limit(1).get()
    if (!pendingsendouts.empty)
    {
      let currobj,currid;
      pendingsendouts.forEach(ele=>{
        currobj=ele.data()
        currid=ele.id
      });
      let mailinglist=[];
      listofemails.forEach((ele)=>{
        mailinglist.push(ele.data().email);
      });
      for(let i=0;i<mailinglist.length;i++){
        const msg={
          to: mailinglist[i],
          from: process.env.TEST_MAIL,
          subject: 'Someone needs our precious Help',
          html:'<h1>Hi there</h1><h3>A new request arrived!</h3><h5>Please spare some time and donate on {url}!</h5>'
        };        
        sgMail.send(msg).then(()=>{
        }).catch((err)=>{
        })
      }
    }
  }
},3000)



// sgMail.send(msg).then(()=>{
//   console.log("Email Sent")
// }).catch((err)=>{
//   console.error(err)
// })