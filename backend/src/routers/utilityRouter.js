const express=require('express');
const router=new express.Router();
const path=require("path");
const data=require('../../city-state-data.json');

router.post('/districts',async(req,res)=>{
      try{
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
})

module.exports=router