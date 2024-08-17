import React, { useState, useEffect } from "react";
import { Button, Grid, Select, MenuItem, InputLabel } from "@mui/material";

const ProductSalesForm = () => {
  const [year, setYear] = useState("");
  const [quarter, setQuarter] = useState("");
  const [product, setProduct] = useState(0);
  const [products, setProducts] = useState([]);

  const quarters = ["1", "2", "3", "4"];
  const years = Array.from({ length: 11 }, (_, index) => 2020 + index);

  // Fetch product names from the API
  useEffect(() => {
    fetch("http://54.151.252.42/shop")
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
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <InputLabel>Year</InputLabel>
          <Select
            variant="outlined"
            fullWidth
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            {years.map((y) => (
              <MenuItem key={y} value={y}>
                {y}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel>Quarter</InputLabel>
          <Select
            variant="outlined"
            fullWidth
            value={quarter}
            onChange={(e) => setQuarter(e.target.value)}
          >
            {quarters.map((q) => (
              <MenuItem key={q} value={q}>
                {q}
              </MenuItem>
            ))}
          </Select>
        </Grid>
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
            {products.map((cat) => (
              <MenuItem key={cat.Product_id} value={cat.Product_id}>
                {cat.Title}
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <a href={`/sales/${year}/${quarter}/p/${product}`}>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "6%" }}
          >
            Get Sales Data
          </Button>
        </a>
      </Grid>
    </div>
  );
};

export default ProductSalesForm;
