import React, { useState, useEffect } from "react";
import { Typography, Paper } from "@mui/material";
import axios from "axios";

const DeliveryPage = ({ city, customerId }) => {
  // State to store the total delivery days
  const [totalDeliveryDays, setTotalDeliveryDays] = useState(0);

  // Function to fetch data from the server
  const fetchData = async () => {
    axios
      .get(
        `https://e-commerce-backend-eight-green.vercel.app/delivery/${customerId}/${city}`
      )
      .then((response) => {
        console.log(response);
        const totalDays = response.data[0].days;
        setTotalDeliveryDays(totalDays);
      });

    // try {
    //   // Fetch delivery days for the customer and city
    //   const customerCityResponse = await fetch(
    //     `http://localhost:8000/delivery/${customerId}/${city}`
    //   );
    //   console.log(customerCityResponse);
    //   const customerCityData = await customerCityResponse[0].days;
    //   setTotalDeliveryDays(totalDeliveryDays + customerCityData);
    // } catch (error) {
    //   console.error('Error fetching data:', error);
    // }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, [customerId, city]);

  return (
    <Paper>
      <Typography variant="h5" gutterBottom textAlign="center">
        You will receive your items within
      </Typography>
      <Typography variant="h6" gutterBottom textAlign="center">
        Total Delivery Days: {totalDeliveryDays}
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        textAlign="center"
        style={{ marginBottom: "50px" }}
      >
        Have a nice day! Come again.
      </Typography>
    </Paper>
  );
};

export default DeliveryPage;
