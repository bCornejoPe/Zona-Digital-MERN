import jsonwebtoken from "jsonwebtoken"
import {config} from "../config.js"


export const validateAuthToken = (allowedUserType = []) =>{
    return (req, res, next) =>{
        try {
            //1-
            const {authToken} = req.cookies;

            if(!authToken){
                res.json({message: "No auth token found"})
            }

            const decoded = jsonwebtoken.verify(authToken, config.JWT.secret)
            if(!allowedUserType.includes(decoded.userType)){
                return res.json({mesage: "Acces denied"})
            }
            next()
        } catch (error) {
            res.json({message: "error"+error})
        }
    }
}