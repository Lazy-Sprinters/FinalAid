const express=require('express');
const router=new express.Router();
const path=require("path");
const db=require('../dbconfig/firebase')
const bucket=require('../dbconfig/storage');

require('dotenv').config({path:path.resolve(__dirname,'../../.env')})



module.exports=router