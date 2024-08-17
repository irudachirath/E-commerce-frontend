import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import NavBar from "../components/Nav";
import { Link } from "react-router-dom";

const ShopPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the API when the component mounts
    axios
      .get("http://54.151.252.42/shop")
      .then((response) => {
        console.log(response);
        setProducts(response.data); // Assuming the API returns an array of products
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Add customer_id and state to the dependency array

  return (
    // <div>
    //   <h2>Shop</h2>
    //   <div className="product-list">
    //     {products.map((product) => (
    //       <div key={product.Product_id} className="product">
    //         <h3>{product.Title}</h3>
    //         <p>Description: {product.Description}</p>
    //         <img src={product.Image} width="20%"/>
    //         {/* You can add more product information here */}
    //         <button onClick={()=>window.location.href=`http://localhost:3000/shop/${product.Product_id}`}>View Product</button>
    //       </div>
    //     ))}
    //   </div>

    <Container maxWidth="lg">
      <NavBar />
      <Typography
        variant="h2"
        component="div"
        gutterBottom
        textAlign="center"
        marginTop="20px"
      >
        Shop
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.Product_id} xs={12} sm={6} md={3}>
            <div style={{ display: "flex", alignItems: "stretch" }}>
              <Card
                elevation={4}
                height="400px"
                style={{ flex: 1, minHeight: "400px", margin: 10, padding: 10 }}
              >
                <CardMedia
                  component="img"
                  alt={product.Title}
                  height="200px"
                  margin="0px"
                  image={product.Image}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {product.Title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    ${product.Min_price}
                  </Typography>
                  <Link to={`/shop/${product.Product_id}`}>
                    <Button variant="outlined" color="primary">
                      View Product
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>

    // </div>
  );
};

export default ShopPage;
