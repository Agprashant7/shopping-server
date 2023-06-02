const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema=new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    userId: {
        type: String,
        require: true,
        index: true,
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        lowercase: true,
        index:true
    },
    hash_password: {
        type: String,
        require: true,
     },  
    profilePicture: {
        type: String,
     },
   },{ timestamps: true })
//For get fullName from when we get data from database
userSchema.virtual("fullName").get(function () {
    return `${this.firstName} ${this.lastName}`;
  });
  userSchema.method({
    async authenticate(password) {
       return await bcrypt.compare(password, this.hash_password);
    },
  });

   module.exports=mongoose.model('User',userSchema)