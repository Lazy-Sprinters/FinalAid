const axios = require('axios').default;
const express=require('express');
const router=new express.Router();
const path=require("path");
const bcrypt=require('bcryptjs');
const db=require('../dbconfig/firebase');
const bucket=require('../dbconfig/storage');
const nodemailer=require('nodemailer')
const jwt=require('jsonwebtoken');
const {firestore}=require('firebase-admin');

require('dotenv').config({path:path.resolve(__dirname,'../../.env')})

const transporter=nodemailer.createTransport({
      service: process.env.SERVICE,
      auth:{
            user:process.env.TEST_MAIL,
            pass:process.env.TEST_PASS
      }
});



router.post("/register",async(req,res)=>{
      try{
            const response=await axios.get(`https://api.postalpincode.in/pincode/${req.body.pincode}`)
            const hash=await bcrypt.hash(req.body.password,8);
            const orgdata={
                  email:req.body.email,
                  phoneNo:req.body.phoneNo,
                  address:req.body.address,
                  pincode:req.body.pincode,
                  district:response.data[0].PostOffice[0].District,
                  state:req.body.state1,
                  tokens:[],
                  password:hash,
                  type:req.body.type,
                  status:((req.body.type=="crematorium")?"Busy":"Not Applicable"),
                  noofworker:0
            }
            // console.log(orgdata);
            
            await db.collection("Organization").add(orgdata);
            
            //send email functionality // if success
            
            res.send({
                  success: true,
                  code: 201,
                  message: "User created",
                  response: orgdata
            })

      }catch(err){
            // console.log(err.message);
            res.send({
                  success: false,
                  code: 400,
                  message: err.message,
                  response: null
            });
      }
})

router.post("/login",async(req,res)=>{
      try{
            const userdoc=await db.collection("Organization").where("email",'==',req.body.email).get();
            if (userdoc.empty){
                  res.send({
                        success: false,
                        code: 403,
                        message: "Invalid Login Credentials",
                        response: null
                  });      
            }else{
                  // console.log(userdoc[0].data())
                  let userdata;
                  let userid;
                  userdoc.forEach(async doc=>{
                        userdata=doc.data();
                        userid=doc.id
                  });
                  const ismatch=await bcrypt.compare(req.body.password,userdata.password);
                  // console.log(ismatch,userdata);
                  if (ismatch){
                        const token=jwt.sign({_id:userid},process.env.SECRET);
                        const ref=db.collection("Organization").doc(userid)
                        await ref.update("tokens",firestore.FieldValue.arrayUnion(token));
                        const resuserdata={
                              ...userdata,
                              id:userid
                        };
                        delete resuserdata.tokens; 
                        res.send({
                              success: true,
                              code: 200,
                              message: "Logged In Successfully",
                              response: {user:resuserdata,token:token}
                        })
                  }else{
                        res.send({
                              success: false,
                              code: 403,
                              message: "Invalid Login Credentials",
                              response: null
                        });     
                  }
            }
      }catch(err){
            res.send({
                  success: false,
                  code: 400,
                  message: "Some error occured",
                  response: null
            });
      }
})

router.post('/search',async (req,res)=>{
      try{
            const snapshot=await db.collection('Organization').where('district','==',req.body.data.district).get();
            if (snapshot.empty)
            {      
                  res.send({
                        success: false,
                        code: 404,
                        message: "No Matching Centres are registered with out!",
                        response: null
                  });
            }else{
                  const data=[];
                  snapshot.forEach(org => {
                        data.push({                              
                              ...org.data(),
                              id:org.id
                        });
                        delete data[data.length-1].tokens;
                        delete data[data.length-1].password;
                  });      
                  res.send({
                        success: true,
                        code: 200,
                        message: "Success",
                        response: data
                  });
            }
      }catch(err){
            res.send({
                  success: false,
                  code: 400,
                  message: "Some error occured",
                  response: null
            });
      }
})



module.exports=router