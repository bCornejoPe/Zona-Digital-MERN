const branchesCrontroller = {};
import branchesModels from "../models/Branches.js"

//select
branchesCrontroller.getBranches = async (req, res) => {
    const branches = await
    branchesModels.find()
    res.json(branches)
};

//insert
branchesCrontroller.createBranches = async (req, res) => {
    const {name, address, telephone, schedule } = req.body;
    const newbranches = new branchesModels({name, address, telephone, schedule})
    await newbranches.save()
    res.json({message: "branches saved"});

};

//delete 
branchesCrontroller.deleteBranches = async (req, res) => {
    await branchesModels.findByIdAndDelete(req.params.id)
    res.json({message: "branches deleted"});
};

//UPDATE
branchesCrontroller.updateBranches = async (req, res) => {
    //solicito los valores
 const {name, address, telephone, schedule} = req.body;
 await branchesModels.findByIdAndUpdate(req.params.id,{name, address, telephone, schedule}, {new: true});

 res.json({message: "branches update"});

};

export default branchesCrontroller;