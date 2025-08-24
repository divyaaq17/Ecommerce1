const express = require('express');
const app = express();

// Import route files
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

app.use(express.json());

// Use routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

app.listen(2000, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
