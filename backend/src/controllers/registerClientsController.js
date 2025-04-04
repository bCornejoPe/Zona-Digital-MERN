import jsonwebtoken from  "jsonwebtoken";
import bcryptjs from "bcryptjs";
import nodemailer from "nodemailer";
import crypto from "crypto"
import clientsModel from "../models/Clients.js"
import {config} from "../config.js"



const registerClientController = {};

registerClientController.registerClients = async (req , res) =>{

    const {
        name, 
        lastName,
         birthday, 
         email, 
         password, 
         telephone,
          DUI, 
          isVerified

    } = req.body;

    try{
        const existClient = await clientsModel.findOne({email})
        if (existClient) {
            return res.json({message: "Client already exist"})
        }


        const passwordHash = await bcryptjs.hash(password, 10)


        const newClient = new clientsModel({

            name, 
        lastName,
         birthday, 
         email, 
         password: passwordHash, 
         telephone,
          DUI : DUI || null, 
          isVerified: isVerified || false,



        })

        await newClient.save();

        const verificationCode = crypto.randomBytes(3).toString("hex");
        const expiresAt = Date.now() +2*60*60*1000;


        const tokenCode = jsonwebtoken.sign({



            email, verificationCode, expiresAt},
            config.JWT.secret,
            {expiresIn: config.JWT.expiresIn},

            (error, token ) =>{
                if (error) console.log("error"+error);
                res.cookie("verificationToken",token,{maxAge:2*60*60*1000
                })
            }


        )

        const transporter = nodemailer.createTransport({

            service: "gmail",
            auth:{
                user: config.email.user,
                pass: config.email.pass

            }
        })

        const mailOptions= {
                from: config.email.user,
                to: email,
                subject: "Verificacion de correo",
                text: `Para verificar que eres dueño de la cuenta utiliza este codigo ${verificationCode}\n Este codigo expira en 2 horas\n`
        }

        transporter.sendMail(mailOptions, (error, info)=>{

            if(error) console.log("error"+error)
                res.json({message: "Email sent"})

        })

        res.json({message:"Client registered, Please verify your email"})
    } catch (error){

        res.json({message: "error"+error})

    }

}
    registerClientController.verifyCodeEmail = async(req, res) =>{
        const {verificationCode}= req.body

        const token = req.cookies.verificationtoken;
        if(!token){
            return res.json({message: "Please register your acount first"})
        }

        try {
            const docoded = jsonwebtoken.verify(token, config.JWT.secret)
            const {email, verificationCode: storeCode} = docoded;

            if(verificationCode !== storeCode){
                return res.json({message: "Invalid verification"})
            }

            const client = await clientsModel.findOne({email})
            if(!client){
                return res.json({message: "Client not found"})
            }

            client.isVerified = true,
            await client.save();


            res.clearCookie("verificationToken")

            res.json({message: "Email verified sucessfully"})
        } catch (error) {
            res.json({message:"error"+error})            
        }
    }



export default registerClientController;