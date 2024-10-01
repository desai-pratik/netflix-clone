import express from "express";
import { getTrendingTv, getTvCategory, getTvDetails, getTvSimilar, getTvTrailers } from "../controllers/tv.controller.js";
const router = express.Router();


router.get("/trending", getTrendingTv);
router.get("/:id/trailers", getTvTrailers);
router.get("/:id/details", getTvDetails);
router.get("/:id/similar", getTvSimilar);
router.get("/:category", getTvCategory);


export default router;