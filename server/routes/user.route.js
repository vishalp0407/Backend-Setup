import express from "express";

// Users controlloers
import { authUser, logoutUser } from "#controllers/user.controller.js";

const router = express.Router();

router.post("/login", authUser);
router.post("/logout", logoutUser);

export default router;
