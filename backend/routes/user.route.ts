import express from "express";
import { protectRoute } from "../middleware/auth.middleware.ts";
import { getSuggestedConnections, getPublicProfile, updateProfile } from "../controllers/user.controller.ts";

const router = express.Router();

router.get("/suggestions", protectRoute, getSuggestedConnections);
router.get("/:username", protectRoute, getPublicProfile);
router.put("/profile", protectRoute, updateProfile);

export default router;