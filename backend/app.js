//Paso 1 importo la libreria de express
import express from "express";
import productoRoutes from "./src/router/products.js"
import clientsRoutes from "./src/router/clients.js"
import employeesRoutes from "./src/router/employees.js"
import branchesRoutes from "./src/router/branches.js"
import reviews from "./src/router/reviews.js"
import registerEmployeesRoutes from "./src/router/registerEmployees.js";
import cookieParser from "cookie-parser";
import loginRoutes from "./src/router/login.js";
import logoutRoutes from "./src/router/logout.js";
import registerClient from "./src/router/registerClients.js";
import recoveryPassword from "./src/router/recoveryPassword.js";




//Paso 2 Creo una constante que es igual a la libreria que cree
const app = express();

app.use(express.json());
app.use(cookieParser())

//Definir la rutas
app.use("/api/products", productoRoutes);
app.use("/api/clients", clientsRoutes);
app.use("/api/employees", employeesRoutes);
app.use("/api/branches", branchesRoutes);
app.use("/api/reviews", reviews);
app.use("/api/registerEmployees", registerEmployeesRoutes);
app.use("/api/login", loginRoutes)
app.use("/api/logout", logoutRoutes) 
app.use("/api/registerClients", registerClient )
app.use("/api/recoveryPassword", recoveryPassword)



//Exporto la constante para poder usar express en otros archivos
export default app;
