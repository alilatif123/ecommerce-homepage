const Product = require("../models/productSchema");

// Create a new product
exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      status: true,
      message: "Product Created Successfully",
      data: product,
    });
  } catch (error) {
    next({
      status: 400,
      message: "Product Creation failed",
      stack: error.stack,
    });
  }
};

// Get five recommended products
exports.getRecommendedProducts = async (req, res, next) => {
  try {
    const recommendedProducts = await Product.find()
      .sort({ ratings: -1 })
      .limit(5);

    res.status(200).json({
      status: true,
      message: "Products Fetched Successfully",
      totalProducts: recommendedProducts.length,
      data: recommendedProducts,
    });
  } catch (error) {
    next({ status: 400, message: "Product Fetching failed" });
  }
};

// Get five latest products
exports.getLatestProducts = async (req, res, next) => {
  try {
    const latestProducts = await Product.find()
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json({
      status: true,
      message: "Products Fetched Successfully",
      totalProducts: latestProducts.length,
      data: latestProducts,
    });
  } catch (error) {
    next({ status: 400, message: "Product Fetching failed" });
  }
};
