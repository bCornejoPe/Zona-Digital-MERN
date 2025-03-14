import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

import  {config} from "./src/config.js"

//1 Configuro URI o direccion de la base de datos
const URI = "mongodb://localhost:27017/ZonaDigitalDB20170508";

//2 Conecto la base de datos
mongoose.connect(config.db.URI);



//Creo una constante que es igual a la conexion 
const connection = mongoose.connection;

//veo si funciona
connection.once("open", () =>{
    console.log ("DB is connected");
});
//veo si se desconecto
connection.once("disconnect", () =>{
    console.log ("DB is disconnect");
});

//veo si da error
connection.once("error", (error) =>{
    console.log ("error fun"+error);
});