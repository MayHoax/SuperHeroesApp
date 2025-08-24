import { Router } from "express";
import {
  createSuperhero,
  getSuperheroes,
  getSuperheroById,
  updateSuperhero,
  deleteSuperhero,
} from "../controllers/superheroesController.js";
import { upload } from "../middleware/upload.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

const router = Router();

router.post("/", upload.array("images", 5), asyncHandler(createSuperhero));
router.get("/", asyncHandler(getSuperheroes));
router.get("/:id", asyncHandler(getSuperheroById));
router.patch("/:id", upload.array("images", 5), asyncHandler(updateSuperhero));
router.delete("/:id", asyncHandler(deleteSuperhero));

export default router;
