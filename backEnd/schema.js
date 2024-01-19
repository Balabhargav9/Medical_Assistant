const mongoose = require('mongoose');
const crypto = require('crypto');
const validator = require('validator');
const Schema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        maxLength:35
    },
    lastname:{
        type:String,
        required:true,
        maxLength:35
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:[validator.isEmail,'enter a valid Email']
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true,
        validate:{
            validator : function(el){
                // it only works on save method not on create method 
                return el===this.password;
            },
            message:"passwords arenot same"
        }
    },
    roles:{
        type:String,
        enum:['admin','user'],
        default:'user'
    },
    passwordResetToken:{type:String},
    passswordResetTime:{type:Date}
})
const diet = new mongoose.Schema({
    email:{
        type:String
    },
    dietchart:{
        type:Array
    }
})
const blood = new mongoose.Schema({
    email:{
        type:String
    },
    rbc:{
        type:String
    },
    wbc:{
        type:String
    },
    hdl:{
        type:String
    },
    bmi:{
        type:String
    },
    glu:{
        type:String
    },
    ldl:{
        type:String
    },
    bp:{
        type:String
    },
    hemo:{
        type:String
    }
})
Schema.methods.createPasswordTOken = function() {
const resetToken = crypto.randomBytes(32).toString('hex');
this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
this.passswordResetTime = Date.now() + 10*60*1000;
return resetToken;
}
const ISchema = mongoose.model('schema',Schema);
const Diet = mongoose.model('diet',diet);
const Blood = mongoose.model('blood',blood);
module.exports={ISchema,Diet,Blood};
 