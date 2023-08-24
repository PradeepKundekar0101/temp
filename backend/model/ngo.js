import mongoose from "mongoose";
const NgoSchema = mongoose.Schema({
    name:String,
    email:String,
    regno:Number,
    profile:String,
    password:String,
    owner:String,
    estb:Number,
    events:{
        type: []
    },
    followers:{
        type:[]
    }
});

const ngo = mongoose.model("ngo",NgoSchema);
export default ngo;