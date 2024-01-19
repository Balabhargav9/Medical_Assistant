const express = require('express');
const router = express.Router();

const {sendEmail,getBlood,signUp,logUp,protect,restrictTO,forgotPassword,resetPassword,updatePassword,Menu,BringMenu,BloodNew} = require('./controller');
router.post("/signUp",signUp);
router.post("/login",logUp);
router.post("/forgotpassword",forgotPassword);
router.patch("/resetpassword/:token",resetPassword);
router.patch("/updatepassword",protect,updatePassword);
router.post("/dietmenu",Menu);
router.post("/bringmenu",BringMenu);
router.post("/BloodNew",BloodNew);
router.post("/getBlood",getBlood);
router.post("/sendemail",sendEmail);
module.exports = router;