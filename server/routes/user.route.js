import express from "express";

// Middlewares
import { protect, admin } from "#middlewares/auth.middleware.js";
// Users controlloers
import {
  authUser,
  logoutUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from "#controllers/user.controller.js";

const router = express.Router();

router.post("/login", authUser);
router.post("/logout", logoutUser);
// Registrations
router.route("/").post(registerUser);

// get user Profile
router.route("/profile").get(protect, getUserProfile);

// update user profile
router.route("/profile").put(protect, updateUserProfile);
export default router;
