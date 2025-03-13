import express from "express";
import employeesControllers from "../controllers/employeesControllers.js";

const router = express.Router();

router.route("/")
.get(employeesControllers.getEmployees)
.post(employeesControllers.createEmployees)

router.route("/:id")
.put(employeesControllers.updateEmployees)
.delete(employeesControllers.deleteEmployees);

export default router;