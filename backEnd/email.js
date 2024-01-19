const nodemailer = require('nodemailer');

const sendEmail =async  (options) =>{
     const transporter = nodemailer.createTransport({
        host:process.env.HOST,
        port:process.env.PORTS,
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASSWORD
        }
     });
     const emailOptions = {
        from:'ala.io',
        to: options.email, 
        subject:options.subject,
        text:options.message
     }

     await transporter.sendMail(emailOptions); 
}
module.exports = sendEmail; 