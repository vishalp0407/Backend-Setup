import express from "express";

// Users controlloers
import { authUser } from "#controllers/user.controller.js";

const router = express.Router();

router.post("/login", authUser);

export default router;
