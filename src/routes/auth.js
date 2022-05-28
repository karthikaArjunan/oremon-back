const express=require('express');
const router=express.Router();
const {signup}=require('../controller/auth');
const {signin}=require('../controller/auth');
//const {requireSignin}=require('../controller/auth');
const { validateSignupRequest,validateSigninRequest, isRequestValidated } = require('../validators/auth');
router.post('/signup',validateSignupRequest,isRequestValidated,signup);
router.post('/signin',validateSigninRequest,isRequestValidated,signin);
//router.post('/profile',requireSignin, (req,res)=>{
  //  res.status(200).json({user:'profile'})
//});
module.exports=router;