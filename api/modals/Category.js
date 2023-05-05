const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({
   name:{
    type:String,
    required: true
   }
},
    {timestamps: true} //it's gonna create updateAt and createdAT times
);
module.exports = mongoose.model("Category",CategorySchema)  //modal name and schema