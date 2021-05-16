const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const db = require("./src/dbconfig/firebase");
const utilityRouter = require("./src/routers/utilityRouter");
const orgRouter = require("./src/routers/organization");
const donationRouter = require("./src/routers/donation");

const app = express();

app.use(morgan("dev"));

app.use(express.json({ limit: "10mb", extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(cors()); //Cross Origin Resource Sharing

app.use("/utility", utilityRouter);
app.use("/org", orgRouter);
app.use("/donate", donationRouter);

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

//CHANGE IT--->>>.NODEMAILER

// setInterval(async () => {
//   try {
//     const listofemails = await db.collection("Subscribers").get();
//     if (!listofemails.empty) {
//       const pendingsendouts = await db
//         .collection("Requests")
//         .where("notificationssned", "==", false)
//         .get();
//       if (!pendingsendouts.empty) {
//         let currdata = [];
//         pendingsendouts.forEach((ele) => {
//           currdata.push(ele.id);
//         });
//         let mailinglist = [];
//         listofemails.forEach((ele) => {
//           mailinglist.push(ele.data().email);
//         });
//         // console.log(mailinglist);
//         // console.log(currdata);
//         for (let j = 0; j < currdata.length; j++) {
//           for (let i = 0; i < mailinglist.length; i++) {
//             const msg = {
//               to: mailinglist[i],
//               from: process.env.TEST_MAIL,
//               subject: "Someone needs our precious Help",
//               html: "<h1>Hi there</h1><h3>A new request arrived!</h3><h5>Please spare some time and donate on {url}!</h5>",
//             };
//             // console.log(msg);
//             sgMail
//               .send(msg)
//               .then(() => {
//                 console.log("Mail sent");
//               })
//               .catch((err) => {
//                 console.log(err.message);
//               });
//           }
//           const updateack = await db
//             .collection("Requests")
//             .doc(currdata[j])
//             .update("notificationssned", true);
//         }
//       }
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }, 3000);

//PROCESS FOR MAKING TRANSACTIONS

setInterval(async () => {
  try {
    const requirements=await db.collection('Requests').orderBy('ts').where('alloted','==',false).get();
    if (!requirements.empty)
    {
      // there are some pending requests waiting for funds
      const masteracc=await db.collection(process.env.CNAME).doc(process.env.ID1).get();
      let curraccountbalance=masteracc.data().Balance
      let data=[];
      requirements.forEach(element => {
        data.push({
          ...element.data(),
          id:element.id
        });
      });
      //Upon verification of GST Number with stripe account a proper banking portal reference can be used here
      // console.log(data);
      for(let i=0;i<data.length;i++){
        if (curraccountbalance>=data[i].basiccost-data[i].procuredAmount){
          curraccountbalance-=(data[i].basiccost-data[i].procuredAmount);
          const updref=await db.collection('Requests').doc(data[i].id).update("alloted",true);
          console.log(`fund allotted to id ${data[i].id}`);
        }
      }
      const updref1=await db.collection(process.env.CNAME).doc(process.env.ID1).update('Balance',curraccountbalance);
    }
  } catch (err) {
    console.log(err);
  }
}, 10000);//every 10 mins

//PROCESS FOR INFORMING NGOS ABOUT THE FUNDS

// setInterval(async () => {
//   try {
//     // const balref=await db.collection(process.env.CNAME).doc(process.env.ID2).get();
//     //send out emails to all the orgs if they need funds we can help them with ppe or meals as per requirements 
//   } catch (err) {
//     console.log(err);
//   }
// }, 5000);//every 10 mins
