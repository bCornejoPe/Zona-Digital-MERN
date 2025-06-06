import {Schema, model } from "mongoose";

const FaqsSchema = new Schema ({
questions: {
    type: String,
    minLegth: 4,
    maxLegth: 100,
    trim: true,
    require: true
},
answer:{
    type: String,
    minLegth: 4,
    maxLegth: 100,
    trim: true,
    require: true
},
Level: {
    type: Number,
    min: 1,
    max: 10,
    trim: true,
    require: true
},
isActive:{
    type: Boolean,
    require: true,
    default: true
}


},{
    timestamps: true,
    strick: false
}

);
export default model ("Faqs", FaqsSchema)