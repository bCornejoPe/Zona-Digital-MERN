import express from "express";
import logoutControlle from "../controllers/logoutController.js";

const router = express.Router()

router.route("/").post(logoutControlle.logout);

export default router;