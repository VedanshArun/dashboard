import mongoose, { Schema, models } from "mongoose";

const campaignSchema = new Schema({
    title: {
        type : String , 
        required : true , 
    },
    owner: {
        type : String , 
        required : true , 
    },
    description : {
        type : String , 
        required : true , 
    },
    targetFunds : {
        type : Number , 
        required : true , 
    },
    fundsRaised: {
        type : Number , 
        required : true , 
    }

}, {timestamps :  true});

const campaign = models.campaign || mongoose.model("campaign", campaignSchema);
export default campaign ; 