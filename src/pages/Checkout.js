import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import CardDetailsPage from "./CardDetails";
import DeliveryPage from "./Delivery";

const CheckoutPage = ({ id }) => {
  const [formData, setFormData] = useState({
    First_name: "",
    Last_name: "",
    Email: "",
    Phone_number: "",
    Address_line1: "",
    Address_line2: "",
    City: "",
    Province: "",
    Zipcode: "",
    PaymentMethod: "Credit Card",
    DeliveryMethod: "Store Pickup",
  });

  let initialDataFromJSON = [];
  useEffect(() => {
    axios.get(`http://54.151.252.42/checkout/${id}`).then((response) => {
      initialDataFromJSON = response.data[0];
      console.log(initialDataFromJSON);
      //initialDataFromJSON.PaymentMethod = 'Credit Card';
      //setFormData(initialDataFromJSON);
      setFormData((prevData) => {
        return { ...prevData, ...initialDataFromJSON };
      });
    });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [showCardDetails, setShowCardDetails] = useState(false);
  const [showDeliveyDays, setShowDeliveyDays] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling the form submission, such as sending data to a server or processing payment.
    if (formData.PaymentMethod === "Credit Card") {
      setShowCardDetails(true);
      setShowDeliveyDays(false);
    } else {
      setShowDeliveyDays(true);
      setShowCardDetails(false);
    }
  };

  return (
    <div>
      <Typography variant="h5" textAlign="center" style={{ marginTop: "5%" }}>
        Checkout
      </Typography>
      <form onSubmit={handleSubmit} style={{ margin: "3% 10%" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="First Name"
              name="First_name"
              value={formData.First_name}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Last Name"
              name="Last_name"
              value={formData.Last_name}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="Email"
              value={formData.Email}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Phone No."
              name="Phone_number"
              value={formData.Phone_number}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Address Line 1"
              name="Address_line1"
              value={formData.Address_line1}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Address Line 2"
              name="Address_line2"
              value={formData.Address_line2}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="City"
              name="City"
              value={formData.City}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Province"
              name="Province"
              value={formData.Province}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Zip Code"
              name="ZipCode"
              value={formData.Zipcode}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Payment Method</InputLabel>
              <Select
                name="PaymentMethod"
                value={formData.PaymentMethod}
                onChange={handleInputChange}
                fullWidth
              >
                <MenuItem value="Credit Card">Credit Card</MenuItem>
                <MenuItem value="Cash on Delivery">Cash on Delivery</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Delivery Method</InputLabel>
              <Select
                name="DeliveryMethod"
                value={formData.DeliveryMethod}
                onChange={handleInputChange}
                fullWidth
              >
                <MenuItem value="Store Pickup">Store Pickup</MenuItem>
                <MenuItem value="Delivery">Delivery</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            margin="2%"
          >
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      {showCardDetails && <CardDetailsPage id={id} city={formData.City} />}
      {showDeliveyDays && <DeliveryPage customerId={id} city={formData.City} />}
    </div>
  );
};

export default CheckoutPage;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function CheckoutPage() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone_number: '',
//     address_line1: '',
//     address_line2: '',
//     city: '',
//     province: '',
//     zipCode: '',
//     paymentMethod: 'Credit Card',
//   });

//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add logic for handling the form submission, such as sending data to a server or processing payment.
//     if (formData.paymentMethod === 'Credit Card') {
//       navigate('/card-details');
//     }
//   }

//   return (
//     <div>
//       <h2>Checkout</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>First Name:</label>
//           <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
//         </div>
//         <div>
//           <label>Last Name:</label>
//           <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
//         </div>
//         <div>
//           <label>Phone No.:</label>
//           <input type="tel" name="phone_number" value={formData.phone_number} onChange={handleInputChange} required />
//         </div>
//         <div>
//           <label>Address Line 1:</label>
//           <input type="text" name="address_line1" value={formData.address_line1} onChange={handleInputChange} required />
//         </div>
//         <div>
//           <label>Address Line 2:</label>
//           <input type="text" name="address_line2" value={formData.address_line2} onChange={handleInputChange} required />
//         </div>
//         <div>
//           <label>City:</label>
//           <input type="text" name="city" value={formData.city} onChange={handleInputChange} required />
//         </div>
//         <div>
//           <label>Province:</label>
//           <input type="text" name="province" value={formData.province} onChange={handleInputChange} required />
//         </div>
//         <div>
//           <label>Zip Code:</label>
//           <input type="text" name="zipCode" value={formData.zipCode} onChange={handleInputChange} required />
//         </div>
//         <div>
//           <label>Payment Method:</label>
//           <select name="paymentMethod" value={formData.paymentMethod} onChange={handleInputChange}>
//             <option value="Credit Card">Credit Card</option>
//             <option value="Cash on Delivery">Cash on Delivery</option>
//           </select>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default CheckoutPage;
