const axios = require('axios').default;
const express=require('express');
const router=new express.Router();
const path=require("path");
const bcrypt=require('bcryptjs');
const db=require('../dbconfig/firebase');
const bucket=require('../dbconfig/storage');
const nodemailer=require('nodemailer');
const {firestore}=require('firebase-admin');

require('dotenv').config({path:path.resolve(__dirname,'../../.env')})

const transporter=nodemailer.createTransport({
      service: process.env.SERVICE,
      auth:{
            user:process.env.TEST_MAIL,
            pass:process.env.TEST_PASS
      }
});

const GetOtp = () => {
      let val = Math.floor(Math.random() * 1000000);
      if (val.toString().length == 5) {
            val *= 10;
      }
      return val;
};


router.post("/donationintoperson",async(req,res)=>{
      try{
            const id=req.body.id;
            const amount=parseInt(req.body.amount);
            const dataref=await db.collection('Requests').doc(id).get();
            const data=dataref.data();
            if (data.procuredAmount+amount==data.basiccost){
                  const upd=await db.collection('Requests').doc(id).update({procured:true,procuredAmount:data.basiccost});
            }else{
                  const upd=await db.collection('Requests').doc(id).update({procuredAmount:firestore.FieldValue.increment(amount)});
            }
            res.send({
                  success: true,
                  code: 200,
                  message: "Amount added Successfully",
                  response: null
            });
      }catch(err){
            console.log(err);
            res.send({
                  success: false,
                  code: 400,
                  message: err.message,
                  response: null
            });
      }
});

router.post("/donationintoorg",async (req,res)=>{
      try{
            //Implement a stripe gateway protocol upon confirmation of business account
            const id=req.body.id;
            const amount=req.body.amount;
            const updateref=await db.collection('Organization').doc(id).update({currAmount:firestore.FieldValue.increment(amount)});
            res.send({
                  success: true,
                  code: 200,
                  message: "Payment Successfully credited",
                  response: null
            });
      }catch(err){
            console.log(err);
            res.send({
                  success: false,
                  code: 400,
                  message: err.message,
                  response: null
            });
      }
});

router.post("/bufferbackup",async(req,res)=>{
      try{
            const amount=req.body.Amount;
            const updref=await db.collection('MasterAccount').doc(process.env.ID1).update({
                  Balance:firestore.FieldValue.increment(amount)
            });
            res.send({
                  success: true,
                  code: 200,
                  message: "Buffer Credit Successfully",
                  response: null
            });
      }catch(err){
            console.log(err);
            res.send({
                  success: false,
                  code: 400,
                  message: err.message,
                  response: null
            });
      }
});

router.post("/allopenrequests",async (req,res)=>{
      try{
            const snapshot=await db.collection('Requests').where('procured','==',false).get();
            if (!snapshot.empty)
            {
                  let ret=[];
                  snapshot.forEach(ele=>{
                        ret.push({
                              ...ele.data(),
                              id:ele.id,
                              reqAmount:ele.data().basiccost-ele.data().procuredAmount
                        });
                  })
                  for(let i=0;i<ret.length;i++){
                        delete ret[i].alloted;
                        delete ret[i].notificationssned;
                        delete ret[i].procured;
                        delete ret[i].bplId;
                        delete ret[i].procuredAmount;
                        delete ret[i].deceasedAid;
                        delete ret[i].aadhaarId;
                        delete ret[i].name;

                  }
                  res.send({
                        success: true,
                        code: 200,
                        message: "Data must have arrived",
                        response: ret
                  })

            }else{
                  res.send({
                        success: true,
                        code: 200,
                        message: "No data found",
                        response: []
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
});

router.post("/allcentresfund",async (req,res)=>{
      try{
            const snapshot=await db.collection('Organization').get();
            if (snapshot.empty){
                  res.send({
                        success: true,
                        code: 200,
                        message: "No centres found",
                        response: []
                  });
            }else{      
                  let ret=[];
                  snapshot.forEach(ele=>{
                        ret.push({
                              ...ele.data(),
                              id:ele.id,
                              reqAmount:20000-ele.currAmount
                        });
                  })
                  for(let i=0;i<ret.length;i++){
                        delete ret[i].tokens;
                        delete ret[i].password;
                        delete ret[i].type;
                        delete ret[i].ts;
                  }    
                  res.send({
                        success: true,
                        code: 200,
                        message: "No centres found",
                        response: ret 
                  })
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
});

module.exports=router