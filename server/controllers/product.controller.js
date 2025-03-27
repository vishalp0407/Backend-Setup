import ProductModel from "#models/product.model.js";

/**
 * @desc Fetch All  products
 * @route Get/api/v1/products
 * @access public
 */
const getProducts = async (req, res) => {
  const products = await ProductModel.find({});
  res.json(products);
};

/**
 * @desc Fetch single Product
 * @route Get/api/v1/prodcts/:id
 * @access public
 */

const getProductById = async (req, res) => {
  const product = await ProductModel.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

export { getProducts, getProductById };
