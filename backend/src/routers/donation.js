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


router.post("/donationintobuffer",async(req,res)=>{
      try{
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