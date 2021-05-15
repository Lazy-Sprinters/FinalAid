const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const cron=require('node-cron');
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

// setInterval(()=>{
//   const listofemails
// },10000)

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg={
  to: 'pavitragoyal@hotmail.com',
  from: process.env.TEST_MAIL,
  subject: 'Testing Sendgrid',
  text:'easy to do anywhere, even with Node.js',
  html:'<strong>and easy to do anywhere, even with Node.js</strong><h1>hello world</h1>'
};

sgMail.send(msg).then(()=>{
  console.log("Email Sent")
}).catch((err)=>{
  console.error(err)
})