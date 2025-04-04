import express from "express";
import registerClientController from "../controllers/registerClientsController.js";

const router = express.Router()

router.route("/").post(registerClientController.registerClients)
router.route("/verifyCodeEmail").post(registerClientController.verifyCodeEmail)

export default router