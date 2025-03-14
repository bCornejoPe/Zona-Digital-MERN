import express from "express";
import reviewsControllers from "../controllers/reviewControllers.js";

const router = express.Router();

router.route("/")
.get(reviewsControllers.getReview)
.post(reviewsControllers.createReview)

router.route("/:id")
.put(reviewsControllers.updateReview)
.delete(reviewsControllers.deleteReview);

export default router;