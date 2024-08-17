import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Paper,
  Container,
  Button,
  Grid,
} from "@mui/material";
import CheckoutPage from "./Checkout";
import NavBar from "../components/Nav";

const CartPage = () => {
  const { id } = useParams();
  const [cartItems, setCartItems] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    axios
      .get(`http://54.151.252.42/cart/${id}`)
      .then((response) => {
        const cartData = response.data;
        const total = cartData.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        console.log("Cart data:", cartData);
        setCartItems(cartData);
        setTotalValue(total);
      })
      .catch((error) => {
        console.error("Error fetching cart data:", error);
      });
  }, [id]);

  const handleRemoveItem = (item, index) => {
    axios
      .delete(`http://54.151.252.42/cart/${id}/${item.item_id}`)
      .then((response) => {
        console.log(response.data.message); // Success message
        // Update UI after successful backend deletion
        const newCartItems = cartItems.filter((_, idx) => idx !== index);
        const newTotal = newCartItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        setCartItems(newCartItems);
        setTotalValue(newTotal);
      })
      .catch((error) => {
        console.error("Error removing item from cart:", error);
      });
  };

  return (
    <div>
      <NavBar />
      <Typography variant="h4" textAlign="center" style={{ marginTop: "2%" }}>
        Your Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1" textAlign="center">
          Your cart is empty.
        </Typography>
      ) : (
        <Container>
          <Paper elevation={3} style={{ margin: "3% 10%" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      {item.title} {" - "}{" "}
                      {item.variant.map((v) => v.attribute_name).join(" | ")}
                    </TableCell>
                    <TableCell>${item.price}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>
                      ${(item.price * item.quantity).toFixed(2)}
                    </TableCell>
                    <TableCell>
                      <Button
                        color="secondary"
                        onClick={() => handleRemoveItem(item, index)}
                      >
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Typography variant="h5" padding="3%">
              Total Value: ${totalValue.toFixed(2)}
            </Typography>
            <Grid container alignItems="center" justifyContent="center">
              <Button
                onClick={() => setShowCheckout(true)}
                variant="contained"
                color="primary"
                sx={{ margin: "0 0 15px 0" }}
              >
                Checkout
              </Button>
            </Grid>
          </Paper>
          {showCheckout && <CheckoutPage id={id} />}
        </Container>
      )}
    </div>
  );
};

export default CartPage;
