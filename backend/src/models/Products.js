

import {Schema, model } from "mongoose";

const productsSchema = new Schema ({
name: {
    type: String,
    require: true
},
description:{
    type: String,
    
},
price: {
    type: Number,
    require: true,
    MIN: 0
},
Stock: {
    type: Number,
    require: true,
    min: 0

}

},{
    timestamps: true,
    strick: false
}

);
export default model ("Products", productsSchema)