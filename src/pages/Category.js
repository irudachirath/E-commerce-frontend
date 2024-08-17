import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
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

const CategoryProducts = () => {
  const { id } = useParams(); // Get the category ID from the URL parameter
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products belonging to the specified category from the API
    axios
      .get(`http://54.151.252.42/main-categories/${id}`)
      .then((response) => {
        console.log(response);
        setProducts(response.data); // Assuming the API returns an array of products
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [id]); // Re-fetch when the category ID changes

  return (
    <Container maxWidth="lg">
      <NavBar />
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.Product_id} xs={12} sm={6} md={3}>
            <div style={{ display: "flex", alignItems: "stretch" }}>
              <Card
                elevation={4}
                height="350px"
                style={{ flex: 1, minHeight: "350px", margin: 10, padding: 10 }}
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
                  {/* <Typography variant="subtitle1" color="textSecondary">
                  ${product.Min_price}
                </Typography> */}
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

    // <div>
    //   <h2>Products in Category {id}</h2>
    //   <div className="product-list">
    //     {products.map((product) => (
    //       <div key={product.Product_id} className="product">
    //         <img src={product.Image} width="25%"/>
    //         <h3>{product.Title}</h3>
    //         <p>{product.Description}</p>
    //         <p>${product.price}</p>
    //         {/* Add more product information here */}
    //         <button onClick={()=>window.location.href=`http://localhost:3000/shop/${product.Product_id}`}>View Product</button>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default CategoryProducts;
