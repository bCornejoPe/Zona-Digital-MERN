//importo archivo  app.js
import app from "./app.js";
import "./database.js";

//Creo una funcion
//que se encargue de ejecutar el servidor
async function main(){
    const port = 4000;
    app.listen(port);
    console.log("Server on port" + port);
}

//ejecutamos todo
main();
    
