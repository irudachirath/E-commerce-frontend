import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  Typography,
} from "@mui/material";

const MyAccountPage = () => {
  const [year, setYear] = useState("");
  const [quarter, setQuarter] = useState("");
  const [customer, setCustomer] = useState([]);

  const customer_id = 4;

  const quarters = ["1", "2", "3", "4"];
  const years = Array.from({ length: 11 }, (_, index) => 2020 + index);

  useEffect(() => {
    axios
      .get(
        `https://e-commerce-backend-eight-green.vercel.app/customers/${customer_id}`
      )
      .then((response) => {
        console.log(response);
        setCustomer(response.data[0]);
        console.log(customer);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [customer]);

  return (
    <div style={{ marginTop: "3%" }}>
      <Typography variant="h5" textAlign="center">
        My Orders
      </Typography>
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
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <a href={`/orders/${year}/${quarter}/${customer.Customer_id}`}>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "6%" }}
          >
            Get Orders Data
          </Button>
        </a>
      </Grid>
    </div>
  );
};

export default MyAccountPage;
