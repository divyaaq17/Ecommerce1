const path = require("path");

const getProducts = (req,res) =>{
     res.sendFile(path.join(__dirname, "../views/products.html"));
}

const getProductsById = (req,res) =>{
    const { id } = req.params;
  res.send(`Fetching product with ID: ${id}`);
}

const postProducts = (req,res) =>{
    res.send("New product added");
}

module.exports={
    getProducts,
    getProductsById,
    postProducts
}
