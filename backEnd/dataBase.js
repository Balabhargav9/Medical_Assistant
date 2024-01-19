const mongoose = require('mongoose');
require("dotenv").config();
const DB = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{console.log("Db connection is successfully connected")})
    .catch((error)=>{console.log(error.message)})

}
module.exports = DB;