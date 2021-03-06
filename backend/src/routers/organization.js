const axios = require('axios').default;
const express=require('express');
const router=new express.Router();
const path=require("path");
const bcrypt=require('bcryptjs');
const db=require('../dbconfig/firebase');
const bucket=require('../dbconfig/storage');
const nodemailer=require('nodemailer');
const fs=require('fs');
const jwt=require('jsonwebtoken');
const dtime=require('node-datetime');
const stream=require('stream')
const {firestore}=require('firebase-admin');

require('dotenv').config({path:path.resolve(__dirname,'../../.env')})


const GetOtp = () => {
      let val = Math.floor(Math.random() * 1000000);
      if (val.toString().length == 5) {
            val *= 10;
      }
      return val;
};


router.post("/register",async(req,res)=>{
      try{
            const response=await axios.get(`https://api.postalpincode.in/pincode/${req.body.pincode}`)
            const hash=await bcrypt.hash(req.body.password,8);
            const orgdata={
                  name:req.body.name,
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
                  noofworker:0,
                  bankAccNo:"",
                  CifNo:"",
                  BankName:"",
                  bankbranchCode:"",
                  basiccost:2000,/* to be taken from the user */
                  ts:"Not updated till now",
                  currfunds:0
            }
            // console.log(orgdata);
            
            await db.collection("Organization").add(orgdata);
            
            //send email functionality // if success
            delete orgdata.password;
            res.send({
                  success: true,
                  code: 201,
                  message: "User created",
                  response: orgdata
            })

      }catch(err){
            console.log(err);
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
                        delete resuserdata.password; 
                        // console.log(resuserdata,token);
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

router.post('/newworker',async(req,res)=>{
      try{
            const image=req.body.data.image;
            const data={
                  name:req.body.data.name,
                  contactNo:req.body.data.contactNo,
                  aadhaarNo:req.body.data.aadhaarNo,
                  address:req.body.data.address,
                  ownerid:req.body.user.id,
                  ownerName:req.body.user.name,
                  image:image
            }
            // console.log(data);
            const batch=db.batch();

            const orgref=db.collection("Organization").doc(req.body.user.id).collection("Helper").doc(req.body.data.aadhaarNo);
            const orgref1=db.collection("Organization").doc(req.body.user.id);

            batch.set(orgref,data);
            batch.update(orgref1,{noofworker:firestore.FieldValue.increment(1)});

            await batch.commit();
            let ret=[]
            const data1=await db.collection("Organization").doc(req.body.user.id).collection("Helper").get();
            data1.forEach(element => {
                  ret.push(element.data());
            });
            // console.log(ret);
            res.send({
                  success: true,
                  code: 200,
                  message: "Workers fetched successfully",
                  response: ret
            })
            
      }catch(err){
            // console.log(err);
            res.send({
                  success: false,
                  code: 400,
                  message: err.message,
                  response: null
            });
      }
})

router.post('/allhelpers',async(req,res)=>{
      try{
            // console.log(req.body);
            const snapshothelper=await db.collection("Organization").doc(req.body.user.id).collection('Helper').get();
            if (snapshothelper.empty)
            {
                  res.send({
                        success: true,
                        code: 200,
                        message: "No Helpers Registered with us",
                        response: []
                  });
            }else{
                  let ret=[];
                  snapshothelper.forEach(element => {
                        ret.push({
                              ...element.data()
                        })
                  });      
                  // console.log(ret.length);
                  res.send({
                        success: true,
                        code: 200,
                        message: "Helpers fetched successfully",
                        response: ret
                  });
            }
      }catch(err){
            console.log(err);
            res.send({
                  success: false,
                  code: 400,
                  message: err.message,
                  response: null
            });

      }
})

router.post('/newfundreq',async(req,res)=>{
      try{
            // console.log(req.body);
            const data={
                  name:req.body.data.name,
                  aadhaarId:req.body.data.aadhaarId,
                  bplId:req.body.data.bplId,
                  deceasedName:req.body.data.deceasedName,
                  deceasedAid:req.body.data.deceasedAid,
                  Raiserid:req.body.user.id,
                  RaiserName:req.body.user.name,
                  alloted:false,
                  procured:false,
                  notificationssned:false,
                  procuredAmount:0,
                  basiccost:req.body.user.basiccost,
                  state:req.body.user.state,
                  ts:firestore.Timestamp.now()
            }
            
            await db.collection("Requests").add(data);
            // console.log(data);
            res.send({
                  success: true,
                  code: 201,
                  message: "Request Raised Successfully",
                  response: data
            })

      }catch(err){
            // console.log(err);
            res.send({
                  success: false,
                  code: 400,
                  message: err.message,
                  response: null
            });
      }
});

router.post('/updatestatus',async (req,res)=>{
      try{
            // console.log(req.body);
            if (req.body.data==undefined){
                  res.send({
                        success: true,
                        code: 201,
                        message: "Status Updated Successfully",
                        response: {
                              ...req.body
                        }
                  });
            }else{
            
            const dt1=dtime.create();
            const formatted=dt1.format('Y-m-d H:M:S');
            const ret={...req.body};
            ret.user.ts=formatted;
            ret.user.status=req.body.data.status;
            await db.collection("Organization").doc(req.body.user.id).update({status:req.body.data.status,ts:formatted});
            
            res.send({
                  success: true,
                  code: 201,
                  message: "Status Updated Successfully",
                  response: ret
            })
      }
      }catch(err){
            // console.log(err.message);
            res.send({
                  success: false,
                  code: 400,
                  message: err.message,
                  response: null
            });
      }
});

router.post('/logout',async (req,res)=>{
      try{
            const ref=db.collection('Organization').doc(req.body.user.id);
            ref.update({tokens:firestore.FieldValue.delete()});
            res.send({
                  success: true,
                  code: 400,
                  message: "Logged Out Successfully",
                  response: null
            });
      }catch(err){
            // console.log(err.message);
            res.send({
                  success: false,
                  code: 400,
                  message: err.message,
                  response: null
            });
      }
});


module.exports=router