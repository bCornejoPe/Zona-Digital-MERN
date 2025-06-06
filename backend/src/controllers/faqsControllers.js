const faqsController = {};
import faqsModel from "../models/faqs.js"

//select
faqsController.getFaqs = async (req, res) => {
    try {
        const faqs = await
        faqsModel.find()
        res.json(faqs)
        req.status(200).json(faqs)
    } catch (error) {
       
        req.status(500).json(faqs).json({message: "Internal server error"});
    }
 
};

//insert
faqsController.createFaqs = async (req, res) => {
    const {questions, answer, Level, isActive } = req.body;
    try {

        if(!questions||!answer||!Level||!isActive){
            return res.status(400).json({message: "Please write all the fields"})
        }
        if(level <1 || level >10){
            return res.status(400).json({message: "Please insert valid number level"})
        }
        if(questions.legth <4 || answer.legth <4){
            return res.status(400).json({message: "too short"})
        }
        const newFaqs = new faqsModel({questions, answer, Level, isActive })
    await newFaqs.save()
    res.status(200).json(faqs)({message: "faqs saved"});
    } catch (error) {
        console.log("error"+eror)
        req.status(500).json({message: "Internal server error"});
    }
    

};

//delete 
faqsController.deleteFaqs = async (req, res) => {

    try {const deleteFaqs = await faqsModel.findByIdAndDelete(req.params.id)
        if (!deleteFaqs){
            return res.status(400).json({message: "Faq not fund"})        }
        
    } catch (error) {
        console.log("error"+eror)
        req.status(500).json({message: "Internal server error"});
    }
  
};

//UPDATE
faqsController.updateFaqs = async (req, res) => {
    //solicito los valores
    const {questions, answer, Level, isActive } = req.body;
    try {
        if(level <1 || level >10){
            return res.status(400).json({message: "Insert level valid"})
        }
        if(questions.legth <4 || answer.legth <4){
            return res.status(400).json({message: "too short"})
        }
        await faqsModel.findByIdAndUpdate(req.params.id,{questions, answer, Level, isActive }, {new: true});
            if(!updateFaqs){
                return res.status(400).json({message: "faqs not fund update"})
            }
           res.status(200).json({message: "faqs update"})
 res.json({message: "faqs update"});
    } catch (error) {
        console.log("error"+eror)
        req.status(500).json({message: "Internal server error"});
    }
 
}

 export default faqsController;
