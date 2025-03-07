//Paso 1 importo la libreria de express
import express from "express";

//Paso 2 Creo una constante que es igual a la libreria que cree
const app = express();

//Definir la rutas
app.use("api/products")
 

//Exporto la constante para poder usar express en otros archivos
export default app;
