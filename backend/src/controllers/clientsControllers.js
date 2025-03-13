const clientsController = {};
import clientsModels from "../models/Clients.js"

//select
clientsController.getClients = async (req, res) => {
    const clients = await
    clientsModels.find()
    res.json(clients)
};

//insert
clientsController.createClients = async (req, res) => {
    const {name, lastName, birthday, email, password, telephone, DUI, isVerified} = req.body;
    const newClient = new clientsModels({name, lastName, birthday, email, password, telephone, DUI, isVerified})
    await newClient.save()
    res.json({message: "Client saved"});

};

//delete 
clientsController.deleteClients = async (req, res) => {
    await clientsModels.findByIdAndDelete(req.params.id)
    res.json({message: "Client deleted"});
};

//UPDATE
clientsController.updateClients = async (req, res) => {
    //solicito los valores
 const {name, lastName, birthday, email, password, telephone, DUI, isVerified} = req.body;
 await clientsModels.findByIdAndUpdate(req.params.id,{name, lastName, birthday, email, password, telephone, DUI, isVerified}, {new: true});

 res.json({message: "Client update"});

};

export default clientsController;