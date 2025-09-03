let products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Tablet" },
  { id: 4, name: "Charger" }
];

// Fetch all products
const getAllProducts = () => {
  return "Fetching all products";
  
};

// Fetch single product by ID
const getProductById = (id) => {
  return `Fetching product with ID: ${id}`;
};

// Add new product
const postProduct = (product) => {
  return "Adding a new product";
};

module.exports = {
  getAllProducts,
  getProductById,
  postProduct,
};