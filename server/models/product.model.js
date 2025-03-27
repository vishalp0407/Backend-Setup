import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "User ID is required"],
      ref: "UserModel",
    },
    name: {
      type: String,
      required: [true, "User's name is required"],
    },
    rating: {
      type: Number,
      required: [true, "Review rating is required"],
    },
    comment: {
      type: String,
      required: [true, "Review comment is required"],
    },
  },
  { timestamps: true }
);

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "User ID is required"],
      ref: "UserModel",
    },
    name: {
      type: String,
      required: [true, "Product name is required"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
    },
    image: {
      type: String,
      required: [true, "Product image is required"],
    },
    category: {
      type: String,
      required: [true, "Product category is required"],
    },
    brand: {
      type: String,
      required: [true, "Product brand is required"],
    },
    countInStock: {
      type: String,
      required: [true, "Product count in stock is required"],
    },
    rating: {
      type: Number,
      required: [true, "Product rating is required"],
      default: 0,
    },
    numReviews: {
      type: Number,
      required: [true, "Product number of reviews is required"],
      default: 0,
    },
    content: {
      type: String,
      required: [true, "Product content is required"],
    },
    reviews: [reviewSchema],
  },
  { timestamps: true, collection: "products" }
);

const ProductModel = mongoose.model("ProductModel", productSchema);

export default ProductModel;
