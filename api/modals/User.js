const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        reuired:true,
        unique: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required: true,
    },
    profilePic:{
        type:String,
        default: "",

    },
},
    {timestamps: true} //it's gonna create updateAt and createdAT times
);
module.exports = mongoose.model("User",UserSchema)  //modal name and schema