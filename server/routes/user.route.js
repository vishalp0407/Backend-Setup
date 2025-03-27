import express from "express";

// Users controlloers
import {
  authUser,
  logoutUser,
  registerUser,
} from "#controllers/user.controller.js";

const router = express.Router();

router.post("/login", authUser);
router.post("/logout", logoutUser);
// Registrations
router.route("/").post(registerUser);

export default router;
