import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";

import products from "#data/products.js";

import connectDB from "#config/db.config.js";

dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

app.get("/api/v1/products/:id", (req, res) => {
  const product = products.find((prod) => prod._id === req.params.id);
  res.json(product);
});

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan.bold
  );
});
