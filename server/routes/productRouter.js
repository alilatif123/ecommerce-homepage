const express = require("express");
const {
  getRecommendedProducts,
  createProduct,
  getLatestProducts,
} = require("../controllers/productController");
const router = express.Router();

router.route("/recomended-products").get(getRecommendedProducts);
router.route("/latest-products").get(getLatestProducts);
router.route("/").post(createProduct);
module.exports = router;
