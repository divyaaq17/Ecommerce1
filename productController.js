const getProducts = (req,res) =>{
    res.send("Fetching all products");
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