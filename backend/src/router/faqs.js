import express from "express";
import faqsController from "../controllers/faqsControllers.js";

const router = express.Router();

router.route("/")
.get(faqsController.getFaqs)
.post(faqsController.createFaqs)

router.route("/:id")
.put(faqsController.updateFaqs)
.delete(faqsController.deleteFaqs);

export default router;