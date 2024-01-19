const {ISchema ,Diet,Blood} = require("./schema");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const sendEmail = require('./email');
const { create } = require("domain");
const nodemailer = require('nodemailer');
require("dotenv").config();

const signTOken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET);
}
exports.signUp = async (req, res) => {
  try {
    const { firstname, lastname, email, password, confirmPassword ,roles } = req.body;
    const newUser = await ISchema.create({
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
      roles
    });
    const jwtToken = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
    res.cookie('jwt',jwtToken,{
        secure:true,
        httpOnly:true
    })
    res.status(200).json({
      data: { newUser },
      jwt: { jwtToken },
    });
    
  } catch (error) {
    console.log(error.message);
  }
};
// jwt.sign({id:newUser._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES_IN})

exports.logUp = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await ISchema.findOne({ email }).select("+password");
    if (!user) {
      res.status(500).json({
        message: "user is not foound ",
      });
    }
    if (user.password === password) {
        const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.status(200).json({
        user: { user },
        jwt:{jwtToken},
        message: "a valid user is found",
      });
    } else {
      res.status(500).json({
        message: "enter a valid password",
      });
    }
    const bala = req.user;
    
    
  } catch (error) {
    console.log(error.message);
  }
};
exports.protect = async (req, res, next) => {
  var token;
  var decode;
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
      res.status(200).json({ message: "not a valid token" });
    }

    try {
      decode = jwt.verify(token, process.env.JWT_SECRET);
      if (!decode) {
        res.json({ message: "decode went wrong" });
      }
      
    } catch (error) {
      console.log("The error is from here ", error.message);
    }
    // if (!token) {
    //   res.status(500).json({
    //     message: "not a valid user",
    //   });
    // }
    const updateduser = await ISchema.findById(decode.id);

    if (!updateduser) {
      res.json({
        message: "please login again to use the services",
      });
    }
    req.user = updateduser;
    next();
  } catch (error) {
    console.log("This is the error ", error.message);
  }
};

exports.restrictTO=(...roles)=>{
        return(req,res,next)=>{
if(!roles.includes(req.user.roles)){
res.json({
    message:"u have no permission to access"
})
}
next();
    }}

exports.forgotPassword=async (req,res)=>{
   
const {email} = req.body;
const auser = await ISchema.findOne({email});
try{
if(!auser){
    res.json({
        message:"mail is not found"
    })
}
const reToken = auser.createPasswordTOken();
await auser.save();
const resetUrl = `${req.protocol}://${req.get('host')}/health/resetpassword/${reToken}`

const message = `Forgot your password ${resetUrl}`;

await sendEmail({
    email:auser.email,
    subject:`link to update your password`,
    message
})
res.status(200).json({
    message:"link sent successfully"
})
    }
    catch(error){
      auser.passwordResetToken = undefined
      auser.passswordResetTime= undefined
console.log(error.message); 
await auser.save();
res.json({
    message:"error has occured"
})
    }
}

exports.resetPassword = async(req,res) =>{
  const hasedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');
  const requser = await ISchema.findOne({passwordResetToken:hasedToken,
passswordResetTime:{$gt:Date.now()}
});

if(!requser){
    res.json({
        message:"token had expire please generate the token again"
    })
}
requser.password = req.body.password;         
requser.confirmPassword = req.body.confirmPassword;
requser.passwordResetToken=undefined
requser.passswordResetTime=undefined
await requser.save();
const token = signTOken(requser._id);
res.json({
    token,
    user:{requser}
})
}

exports.updatePassword = async (req,res,next) => {
try{
const updatedpass = await ISchema.findById(req.user.id).select('+password');
if( ! (updatedpass.password === req.body.passwordCurrent)){
res.json({
    message:"if dont know password go with forgot pasword option "
})}
updatedpass.password = req.body.password;
updatedpass.confirmPassword = req.body.confirmPassword;
await updatedpass.save();
const token = signTOken(updatedpass.id);
res.json({
    token,
    user:{updatedpass}
})



}
catch(error){
    console.log(error);
}
}

// res.cookie('jwt',token,{
// expires,
// secure:true,
// httpOnly:true
// })

exports.Menu = async (req,res) =>{
  try{
const {email,dietchart} = req.body;
const response = await Diet.create({email,dietchart});
res.status(200).json({
  response
})
  }
  catch(error){
    console.log(error.message);
    res.status(500).json({error:error.message});
  }
}
exports.BringMenu = async(req,res) =>{
  try{
    const {email}=req.body;
const response = await Diet.find();
res.status(200).json({
  response
})
  }
  catch(error){
    console.log(error.message);
    res.status(500).json({error:error.message});
  }
}
exports.BloodNew = async (req,res)=>{
  try{
const {email,rbc,wbc,hdl,bmi,glu,ldl,bp,hemo} = req.body;
const response = await Blood.create({email,rbc,wbc,hdl,bmi,glu,ldl,bp,hemo});
res.status(500).json({
  response
})
  }
  catch(error){
    console.log(error.message);
    res.status(500).json({error:error.message});
  }
}
exports.getBlood = async (req,res) =>{
  try{
const {email} = req.body;
const response = await Blood.find({email});
res.status(200).json({
  response
})
  }
  catch(error){
    console.log(error.message);
    res.status(500).json({error:error.message});
  }
}
exports.sendEmail =async(req,res) =>{
  try{
    const {mail,matter} = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'penugondabalabharghav@gmail.com',
          pass: 'yssv kezg srfr qlby',
        },
      });
    
      const info = await transporter.sendMail({
        from: mail, // Corrected the sender address
        to: "penugondabalabharghav@gmail.com",
        subject: 'Hello World',
        text: 'your order had been accepted',
        html: `${matter}`,
      });
    
      console.log('Message sent: %s', info.messageId);
      res.json(info);
        }
        catch(error){
            console.log(error.message);
            res.status(500).json({
                error:error.message
            })
        }
}