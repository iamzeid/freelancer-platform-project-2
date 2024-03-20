import express from "express";
import {
  createGig,
  deleteGig,
  getGig,
  getGigs,
  addToFavorites,
  removeFromFav,
  getUserFav,
} from "../controllers/gig.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/", verifyToken, createGig);
router.delete("/:id", verifyToken, deleteGig);
router.get("/single/:id", getGig);
router.get("/", getGigs);

router.post('/addToFavorites',addToFavorites);
router.post('/removeFromFavorites', removeFromFav);

router.get('/getAllFav/:userId',getUserFav)
 

export default router;