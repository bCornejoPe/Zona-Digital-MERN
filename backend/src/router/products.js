import express from "express";
import productsController from "../controllers/productsControllers.js";

const router = express.Router();

router.route("/")
.get(productsController.getProducts)
.post(productsController.createPodructs)

router.route("/:id")
.put(productsController.updateProducts)
.delete(productsController.deleteProducts);

export default router;