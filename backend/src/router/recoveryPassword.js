import express from "express";
import registerClientController from "../controllers/registerClientsController.js";

const router = express.Router();

router.route("requestCode").post(registerClientController.requestCode);

export default router