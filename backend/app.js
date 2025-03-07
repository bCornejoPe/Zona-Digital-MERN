//Paso 1 importo la libreria de express
import express from "express";
import productoRoutes from "./src/router/products.js"

//Paso 2 Creo una constante que es igual a la libreria que cree
const app = express();

app.use(express.json());

//Definir la rutas
app.use("/api/products", productoRoutes);


//Exporto la constante para poder usar express en otros archivos
export default app;
