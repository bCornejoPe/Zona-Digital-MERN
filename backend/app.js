//Paso 1 importo la libreria de express
import express from "express";
import productoRoutes from "./src/router/products.js"
import clientsRoutes from "./src/router/clients.js"
import employeesRoutes from "./src/router/employees.js"
import branchesRoutes from "./src/router/branches.js"



//Paso 2 Creo una constante que es igual a la libreria que cree
const app = express();

app.use(express.json());

//Definir la rutas
app.use("/api/products", productoRoutes);
app.use("/api/clients", clientsRoutes);
app.use("/api/employees", employeesRoutes);
app.use("/api/branches", branchesRoutes);



//Exporto la constante para poder usar express en otros archivos
export default app;
