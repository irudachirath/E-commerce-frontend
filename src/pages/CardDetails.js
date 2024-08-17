import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography, Grid } from "@mui/material";
import DeliveryPage from "./Delivery";

const CardDetailsPage = ({ id, city }) => {
  const [cardData, setCardData] = useState({
    Card_Number: "",
    Name_on_Card: "",
    Expiry_Date: "",
    CVV: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:8000/card-details/${id}`).then((response) => {
      const initialDataFromJSON = response.data[0];
      setCardData((prevData) => ({
        ...prevData,
        ...initialDataFromJSON,
      }));
    });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [showDeliveryDays, setShowDeliveryDays] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowDeliveryDays(true);
  };

  return (
    <Container>
      <Typography variant="h5" textAlign="center" sx={{ marginTop: "5%" }}>
        Enter Card Details
      </Typography>
      <form onSubmit={handleSubmit} style={{ margin: "3% 30%" }}>
        <Box sx={{ margin: "12px 0" }}>
          {" "}
          {/* Updated margin */}
          <TextField
            label="Card Number"
            type="text"
            name="Card_Number"
            value={cardData.Card_Number}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Box>
        <Box sx={{ margin: "12px 0" }}>
          {" "}
          {/* Updated margin */}
          <TextField
            label="Card Holder's Name"
            type="text"
            name="Name_on_Card"
            value={cardData.Name_on_Card}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Box>
        <Box sx={{ margin: "12px 0" }}>
          {" "}
          {/* Updated margin */}
          <TextField
            label="Expiration Date"
            type="text"
            name="Expiry_Date"
            value={cardData.Expiry_Date}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Box>
        <Box sx={{ margin: "12px 0" }}>
          {" "}
          {/* Updated margin */}
          <TextField
            label="CVV"
            type="text"
            name="CVV"
            value={cardData.CVV}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Box>
        <Box>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            sx={{ margin: "2%" }}
          >
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Box>
      </form>
      {showDeliveryDays && <DeliveryPage customerId={id} city={city} />}
    </Container>
  );
};

export default CardDetailsPage;
