import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";

// import products from "#data/products.js";
import productRoutes from "#routes/product.route.js";
import { errorHandler } from "#middlewares/error.middleware.js";
import connectDB from "#config/db.config.js";

dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/v1/products", productRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan.bold
  );
});
