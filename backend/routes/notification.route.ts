import express from "express";
import { protectRoute } from "../middleware/auth.middleware.ts";
import {
    deleteNotification,
    getUserNotifications,
    markNotificationAsRead,
} from "../controllers/notification.controller.ts";

const router = express.Router();

router.get("/", protectRoute, getUserNotifications);
router.put("/:id/read", protectRoute, markNotificationAsRead);
router.delete("/:id", protectRoute, deleteNotification);

export default router;