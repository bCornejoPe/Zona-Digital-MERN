const employeesController = {};
import employeesModel from "../models/Employees.js"

//select
employeesController.getEmployees = async (req, res) => {
    const employees = await
    employeesModel.find()
    res.json(employees)
};

//insert
employeesController.createEmployees = async (req, res) => {
    const {name, lastName, birthday, email, address, hireDate, password, telephone, DUI, isssNumber,  isVerified} = req.body;
    const newEmployees = new employeesModel({name, lastName, birthday, email, address, hireDate, password, telephone, DUI, isssNumber,  isVerified})
    await newEmployees.save()
    res.json({message: "Employees saved"});

};

//delete 
employeesController.deleteEmployees = async (req, res) => {
    await employeesModel.findByIdAndDelete(req.params.id)
    res.json({message: "Employees deleted"});
};

//UPDATE
employeesController.updateEmployees = async (req, res) => {
    //solicito los valores
 const {name, lastName, birthday, email, address, hireDate, password, telephone, DUI, isssNumber,  isVerified} = req.body;
 await employeesModel.findByIdAndUpdate(req.params.id,{name, lastName, birthday, email, address, hireDate, password, telephone, DUI, isssNumber,  isVerified}, {new: true});

 res.json({message: "Employees update"});

};

export default employeesController;