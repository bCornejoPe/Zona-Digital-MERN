import express from "express";
import branchesCrontroller from "../controllers/branchesControllers.js";

const router = express.Router();

router.route("/")
.get(branchesCrontroller.getBranches)
.post(branchesCrontroller.createBranches)

router.route("/:id")
.put(branchesCrontroller.updateBranches)
.delete(branchesCrontroller.deleteBranches);

export default router;