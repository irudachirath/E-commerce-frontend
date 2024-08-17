import React, { useState, useEffect } from "react";
import { Button, Grid, Select, MenuItem, InputLabel } from "@mui/material";

const ProductPopularTimeForm = () => {
  const [product, setProduct] = useState(0);
  const [products, setProducts] = useState([]);

  // Fetch product names from the API
  useEffect(() => {
    fetch("https://e-commerce-backend-eight-green.vercel.app/shop")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div style={{ marginTop: "3%" }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6}>
          <InputLabel>Product</InputLabel>
          <Select
            variant="outlined"
            fullWidth
            value={product}
            onChange={(e) => {
              setProduct(e.target.value);
            }}
          >
            {products.map((pro) => (
              <MenuItem key={pro.Product_id} value={pro.Product_id}>
                {pro.Title}
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <a href={`/orders/${product}`}>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "6%" }}
          >
            Get Popular Time
          </Button>
        </a>
      </Grid>
    </div>
  );
};

export default ProductPopularTimeForm;
