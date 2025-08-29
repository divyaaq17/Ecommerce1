const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController')

// GET /products
router.get("/", productController.getProducts);

// POST /products
router.post("/", productController.postProducts);

// GET /products/:id
router.get("/:id", productController.getProductsById);

module.exports = router;
