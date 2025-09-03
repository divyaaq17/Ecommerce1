const productService = require("../services/productService");

const getProducts = (req,res) =>{
  const response = productService.getAllProducts();
  res.send(response);
}

const getProductsById = (req,res) =>{
    const { id } = req.params;
    const response = productService.getProductById(id);
    res.send(response);
}

const postProducts = (req,res) =>{
    const response = productService.postProduct(newProduct);
  res.send(response);
}

module.exports={
    getProducts,
    getProductsById,
    postProducts
}
