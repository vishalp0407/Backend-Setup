import express from "express";

// Controller
import {
  getProducts,
  getProductById,
} from "#controllers/product.controller.js";

const router = express.Router();

//              Public Router

// Fetch the alll product
router.route("/").get(getProducts);

// Fetch the single product
router.route("/:id").get(getProductById);

export default router;
