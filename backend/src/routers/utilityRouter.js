const express=require('express');
const router=new express.Router();
const path=require("path");
const db=require('../dbconfig/firebase');
const jwt=require('jsonwebtoken');
const data=require('../../city-state-data.json');

require('dotenv').config({path:path.resolve(__dirname,'../../.env')})


router.post('/districts',async(req,res)=>{
      try{
            console.log(req.body);  
            res.send({
                  success: true,
                  code: 200,
                  message: "Here is the list",
                  response: data[req.body.state],
            });
      }catch(err){
            res.send({
                  success: false,
                  code: 400,
                  message: "Some error occured",
                  response: null,
            });
      }
});

router.post('/mailnew',async(req,res)=>{
      try{
            const emailobj={
                  name:req.body.name,
                  email:req.body.email
            };

            await db.collection("Subscribers").add(emailobj)
            res.send({
                  success: true,
                  code: 200,
                  message: "Subscribed Successfully,God will bless you for this nobel initiative",
                  response: null
            });


      }catch(err){
            res.send({
                  success: false,
                  code: 400,
                  message: "Some error occured",
                  response: null,
            });
      }
});

router.post('/checkauth',async(req,res)=>{
      try{
            // console.log(req.body.user.id);
            const ref=await db.collection("Organization").doc(req.body.user.id).get();
            if (!ref.exists){
                  res.send({
                        success: false,
                        code: 403,
                        message: "Session Invalid",
                        response: null,
                  });
            }else{
                  const decoded=jwt.verify(req.body.token,process.env.SECRET);
                  let check2=false;
                  req.body.user.tokens.forEach(element => {
                        if (element===req.body.token){
                              check2=true;
                        }
                  });

                  // console.log(decoded);
                  if (decoded._id==req.body.user.id && check2==true){            
                        res.send({
                              success: true,
                              code: 200,
                              message: "Session Valid",
                              response: null,
                        });
                  }else{            
                        res.send({
                              success: false,
                              code: 403,
                              message: "Session Invalid",
                              response: null,
                        });
                  }
            }
      }catch(err){
            // console.log(err.message);
            res.send({
                  success: false,
                  code: 403,
                  message: "Session Invalid",
                  response: null,
            });
      }
});

// router.post('/stats1',async(req,res)=>{
//       try{
//             //geostata
//             //map of state to requests
//             let Map={};
//             Map["Uttar"]
//       }catch(err){
//             res.send({
//                   success: false,
//                   code: 403,
//                   message: "Session Invalid",
//                   response: null,
//             });
//       }
// })

module.exports=router