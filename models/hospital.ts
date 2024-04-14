import mongoose, { Schema, models } from "mongoose";

const hospitalSchema = new Schema({
    name: {
        type : String , 
        required : true , 
    },
    email: {
        type : String , 
        required : true , 
    },
    password : {
        type : String , 
        required : true , 
    },
    userType : {
        type : String , 
        required : true , 
    },

}, {timestamps :  true});

const hospital = models.hospital || mongoose.model("hospital", hospitalSchema);
export default hospital ; 