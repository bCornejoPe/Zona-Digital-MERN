import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcryptjs";


import clientModel from "../models/Clients.js"
import employees from "../models/Employees.js"

import { sendEmail, HTMLRecoveryEmail } from "../utils/MailPasswordRecovey.js";
import {config} from "../config.js"

const passwordRecoveryController = {};
passwordRecoveryController.requestCode = async (req, res) => {

        const {email}= req.body
    try {
        let userFound;
        let userType

        userFound = await clientModel.findOne({email})

        if(userFound){
            userType= "client"
        }
        else{
            userFound = await employees.findOne({email})
            if(userFound){
                userType= "employee"
            }
        }
        if(!userFound){
            res.json({message: "User not found"})
        }

        const code = Math.floor(10000 + Math.random() * 90000).toString();
        const token = jsonwebtoken.sign(
            {email, code, userType, verified: false},
            config.JWT.secret,
            {expiresIn: "20m"}
        )
            
        
        res.cookie("tokenRecoveryCode", token, {maxAge: 20*60*1000})
 
        await sendEmail(
 
            email,
            "You verification code",
            "Hello! Remenber dont forget your pass",
            HTMLRecoveryEmail(code)
 
 
        )
        res.json ({message: "Codigo enviado"})
        
    } catch (error) {
        
        console.log("error"+error)
    }
    
}

passwordRecoveryController.verifyCode = async (req, res) => {
    const {code} = req.body;

    try {
        const token = req.cookies.tokenRecoveryCode

        const decoded = jsonwebtoken.verify(token, config.JWT.secret)
       
    if( decoded.code !== code )
            {
            return res.json({message: "Invalis token"})
        }


        const newToken = jsonwebtoken.sign(

            {email: decoded.email,
                code: decoded.code,
                userType: decoded.userType,
                verified: true
            },

            config.JWT.secret,

            {expiresIn: "20m"}
        )
        res.cookie("tokenRecoveryCode", newToken,{maxAge: 20*60*1000})
        res.json({message: "Code verify successfully"})
    } catch (error) {
        console.log("error"+ error )
    }
}


passwordRecoveryController.newPassword = async (req, res)=>{
const {newPassword} = req.body;

try {
    const token = req.cookies.tokenRecoveryCode;

    const decoded = jsonwebtoken.verify(token, config.JWT.secret)


    if(!decoded.verified){
        return res.json({message: "Codenot verify"})
    }


    const {email, userType} = decoded;

    const hashedPassword = await bcrypt.hash(newPassword, 10)


    let updatedUser;

    if (userType == "client") {
        updatedUser == await clientModel.findOneAndUpdate(
            {email},
            {password: hashedPassword},
            {new: true}
        );
        
    } else if(userType == "employee") {
        updatedUser == await employees.findOneAndUpdate(
            {email},
            {password: hashedPassword},
            {new: true}
        );
    }
res.clearCookie("tokenRecoveryCode");

res.json({message: "new password"})

    }
 catch (error) {
    console.log("error"+ error )             
}

}
export default passwordRecoveryController;



