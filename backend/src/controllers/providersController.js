import providersModel from "../models/Providers.js"

import {v2 as cloudinary} from "cloudinary"
import {config} from "../config.js"


cloudinary.config({

    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinary_api_secret
});

const providersController ={};

providersController.getAllProviders = async (req, res) => {
    const provider = await providersModel.find();
    res.json(provider)
    
};

providersController.insertProviders = async (req,res) => {
    const {name, telephone} = req.body;
       let imageURL = "";

if(req.file){
    const result = await cloudinary.uploader.upload(
        req.file.path,{
            folder: "public",
            allowed_formats: ["png", "jpg", "jpeg"]
        }
    )
        imageURL = result.secure_url
}

const newProvider = new providersModel({name, telephone, image: imageURL});
 await newProvider.save();

res.json({message: "Provider saved"})
}
export default providersController;