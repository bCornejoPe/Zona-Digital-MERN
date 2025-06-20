import express from "express";
import salesController from "../controllers/salesControllers.js";

const router = express.Router();

router.route("/").post(salesController.insertSales)
router.route("/category").get(salesController.salesByCategory)
router.route("/best-products").get(salesController.bestSellingProducts)
router.route("/frequent-custommers").get(salesController.frecuentCustomers)
router.route("/total-earnings").get(salesController.totalEarnings)





export default router;