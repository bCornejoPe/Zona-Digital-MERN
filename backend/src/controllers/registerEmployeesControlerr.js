import EmployeesModels from "../models/Employees.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from  "jsonwebtoken";
import {config} from "../config.js";



const registerEmployeesController = {};

registerEmployeesController.register = async(req,res) =>{

    const { name, lastName, birthday, email, address, password, hiredate, telephone, dui, isVerified, isssnumber}= req.body;



try{
    //1Verificamos si ya existe
    const existEmployee = await EmployeesModels.findOne({email})
    if(existEmployee){
        return res.json({message:"Employee already exist"})
    }

    //2 encriptar la contraseña

    const passwordHash = await bcryptjs.hash(password, 10)

    
    const newEmployee = new EmployeesModels({

        name, lastName, birthday, email, address, password, hiredate, telephone, dui, isVerified, isssnumber

    })

    await newEmployee.save()


    //TOKEN

    jsonwebtoken.sign(
        //1- Que voy a guardar
        {id: newEmployee._id},
        //2- secreto
        config.JWT.secret,
        //3 Cuando expira
        {expiresIn: config.JWT.expiresIn},
        //4 Funcion flecha
        (error, token) => {
            if(error) console.log ("error"+error)
                res.cookie("authToken", token)
                res.json({message: "Employee save"})
        }

    )
} catch(error){
    console.log ("error"+error)
    res.json({message: "Error saving Employees"})
}
}


export default registerEmployeesController;
