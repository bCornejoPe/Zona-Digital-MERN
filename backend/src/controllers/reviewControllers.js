const reviewsControllers = {};
import reviewsModel from "../models/Review.js"

//select
reviewsControllers.getReview = async (req, res) => {
    const reviews = await   
    reviewsModel.find().populate('idClient')
    res.json(reviews)
};

//insert
reviewsControllers.createReview = async (req, res) => {
    const {comment, rating, idClient} = req.body;
    const newReview = new reviewsModel({comment, rating, idClient})
    await newReview.save()
    res.json({message: "Review saved"});

};

//delete 
reviewsControllers.deleteReview = async (req, res) => {
    await reviewsModel.findByIdAndDelete(req.params.id)
    res.json({message: "Review deleted"});
};

//UPDATE
reviewsControllers.updateReview = async (req, res) => {
    //solicito los valores
 const {comment, rating, idClient} = req.body;
 await reviewsModel.findByIdAndUpdate(req.params.id,{comment, rating, idClient}, {new: true});

 res.json({message: "Review update"});

};

export default reviewsControllers;