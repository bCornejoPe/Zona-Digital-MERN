//Importar los modelos
import customersModel from "../models/Clients.js"
import employeesModel from "../models/Employees.js"
import bcryptjs from "bcryptjs"
import jsonwebtoken from "jsonwebtoken"
import { config } from "../config.js"


const loginController ={};
loginController.login = async (req, res) => {

    const {email, password} = req.body

    try {
        //Validamos los tres posibles
        
        let userFound;
        let userType;
        //1. Admin
        if(email===config.ADMIN.emailAdmin && password===config.ADMIN.password){
            userType= "admin";
            userFound={_id:"admin"}
        }
        else{
            userFound = await employeesModel.findOne({email})
            userType = "employee"
            if(!userFound){
                userFound = await customersModel.findOne({email})
                userType = "customer"
            }
        }

        if(!userFound){
            return res.json({message: "Useer not found"})
        }

        //Validar si la contraseña no es admin

        if(userType !== "admin"){
            const isMatch =await bcryptjs.compare(password, userFound.password)
            if(!isMatch){
                return res.json({message: "Invalid password"})
            }
        }

        //Token pa validar que ya inicio sesion
        jsonwebtoken.sign(
            //Que voy a guardar
            {id: userFound._id, userType},
            config.JWT.secret,
            {expiresIn: config.JWT.expiresIn},
            (error, token)=>{
                if (error) console.log("error"+error)
                    res.cookie("authToken",token)
                res.json({message: "Login suce¿cesful   "})
            }
        )
    } catch (error) {
        console.log("error" + error);
        
    }
    
};

export default loginController;