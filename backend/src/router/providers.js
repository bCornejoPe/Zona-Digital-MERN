import express, { Router } from "express";
import providersController from "../controllers/providersController.js";
import multer from "multer"
const router= express.Router();

//Configurar una carpeta local
const upload = multer ({dest: "public/"})
router.route("/")
.get(providersController.getAllProviders)
.post(upload.single("image"), providersController.insertProviders)

export default router