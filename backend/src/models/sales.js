/*
    Campos:
    product
    
    IdClient
*/ 

import {Schema, model } from "mongoose";

const SalesSchema = new Schema ({
product: {
    type: String,
    require: true
},
category:{
    type: String,
    max: 5
    
},
customer: {
    type: String,
    require: true

},
total: {
    type: Number,
    require: true

},
total: {
    type: Number,
    require: true,
    min: 0.01,
    max: 100000000000000000000000000000000000000000

},fecha: {
    type: Date,
    require: true

},

},{
    timestamps: true,
    strict: false
}

);
export default model ("Sales", SalesSchema)