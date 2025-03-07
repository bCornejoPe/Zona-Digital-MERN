const productsController = {};
import productModel from "../models/Products.js"

//select
productsController.getProducts = async (req, res) => {
    const products = await
    productModel.find()
    res.json(products)
};

//insert
productsController.createPodructs = async (req, res) => {
    const {name, description, price, stock} = req.body;
    const newProduct = new productModel({name, description, price, stock})
    await newProduct.save()
    res.json({message: "product saved"});

};

//delete 
productsController.deleteProducts = async (req, res) => {
    await productModel.findByIdAndDelete(req.params.id)
    res.json({message: "product deleted"});
};

//UPDATE
productsController.updateProducts = async (req, res) => {
    //solicito los valores
 const {name, description, price, stock} = req.body;
 await productModel.findByIdAndUpdate(req.params.id,{name, description, price, stock}, {new: true});

 res.json({message: "product update"});

};

export default productsController;