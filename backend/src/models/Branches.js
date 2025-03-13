import {Schema, model } from "mongoose";

const BranchesSchema = new Schema ({
name: {
    type: String,
    require: true
},
address:{
    type: String,
    require: true
    
},
telephone: {
    type: String,
    require: true
},
schedule:{
    type: String,
    require: true
}


},{
    timestamps: true,
    strick: false
}

);
export default model ("Branches", BranchesSchema)