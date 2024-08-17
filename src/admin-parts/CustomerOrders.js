import React, { useState, useEffect } from "react";
import { Button, Grid, Select, MenuItem, InputLabel } from "@mui/material";

const CustomerOrdersForm = () => {
  const [year, setYear] = useState("");
  const [quarter, setQuarter] = useState("");
  const [customer, setCustomer] = useState(0);
  const [customers, setCustomers] = useState([]);

  const quarters = ["1", "2", "3", "4"];
  const years = Array.from({ length: 11 }, (_, index) => 2020 + index);

  useEffect(() => {
    fetch("http://54.151.252.42/customers")
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data);
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
          <InputLabel>Customer</InputLabel>
          <Select
            variant="outlined"
            fullWidth
            value={customer}
            onChange={(e) => {
              setCustomer(e.target.value);
            }}
          >
            {customers.map((cus) => (
              <MenuItem key={cus.Customer_id} value={cus.Customer_id}>
                {cus.Customer_id}. {cus.First_name} {cus.Last_name} - {cus.City}
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <a href={`/orders/${year}/${quarter}/${customer}`}>
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

export default CustomerOrdersForm;
