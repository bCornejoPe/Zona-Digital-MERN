/*
    Campos:
    coment
    Rating
    IdClient
*/ 

import {Schema, model } from "mongoose";

const reviewSchema = new Schema ({
comment: {
    type: String,
    require: true
},
rating:{
    type: String,
    max: 5
    
},
idClient: {
    type: Schema.Types.ObjectId,
    ref: "clients",
    require: true,

},
},{
    timestamps: true,
    strict: false
}

);
export default model ("Reviews", reviewSchema)
