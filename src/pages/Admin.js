import React, {useState} from 'react';
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import SalesForm from '../admin-parts/Sales';
import CategorySalesForm from '../admin-parts/CategorySales';
import ProductSalesForm from '../admin-parts/ProductSales';
import MostSalesForm from '../admin-parts/MostSales';
import CustomerOrdersForm from '../admin-parts/CustomerOrders';
import ProductPopularTimeForm from '../admin-parts/ProductPopularTime';
import NavBar from '../components/Nav';

const AdminPage = () => {

    const [showSales, setShowSales] = useState(false);
    const [showCategorySales, setShowCategorySales] = useState(false);
    const [showProductSales, setShowProductSales] = useState(false);
    const [showMostSales, setShowMostSales] = useState(false);
    const [showCustomerOrders, setShowCustomerOrders] = useState(false);
    const [showPopularTime, setShowPopularTime] = useState(false);

  return (
    <div>

      <NavBar/>

      <Typography variant='h4' textAlign="center" marginTop="2%">Admin Panel</Typography>

      <Grid container spacing={2} alignItems="center" justifyContent="center">

        {/* Sales Reports Section */}
        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" textAlign="center">Sales Reports Section</Typography>
              <Grid container alignContent="center" justifyContent="center">
              <Button variant="contained" color="primary" style={{margin:"3%"}}
                    onClick={()=>{
                        setShowSales(true);
                        setShowCategorySales(false);
                        setShowProductSales(false);
                        setShowMostSales(false);
                        setShowCustomerOrders(false);
                        setShowPopularTime(false);
                    }}>
                Sales
              </Button>
              <Button variant="contained" color="primary" style={{margin:"3%"}}
                    onClick={()=>{
                        setShowCategorySales(true);
                        setShowSales(false);
                        setShowProductSales(false);
                        setShowMostSales(false);
                        setShowCustomerOrders(false);
                        setShowPopularTime(false);
                    }}>
                Category Sales
              </Button>
              <Button variant="contained" color="primary" style={{margin:"3%"}}
                    onClick={()=>{
                        setShowProductSales(true);
                        setShowSales(false);
                        setShowCategorySales(false);
                        setShowMostSales(false);
                        setShowCustomerOrders(false);
                        setShowPopularTime(false);
                    }}>
                Product Sales
              </Button>
              <Button variant="contained" color="primary" style={{margin:"3%"}}
                    onClick={()=>{
                        setShowMostSales(true);
                        setShowSales(false);
                        setShowCategorySales(false);
                        setShowProductSales(false);
                        setShowCustomerOrders(false);
                        setShowPopularTime(false);
                    }}
              >
                Most Sales
              </Button>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Order Report Section */}
        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" textAlign="center">Order Report Section</Typography>
              <Grid container alignContent="center" justifyContent="center">
              <Button variant="contained" color="primary" style={{margin:"3%"}}
                onClick={()=>{
                    setShowCustomerOrders(true);
                    setShowSales(false);
                    setShowCategorySales(false);
                    setShowProductSales(false);
                    setShowMostSales(false);
                    setShowPopularTime(false);
                }}
              >
                Customer Orders
              </Button>
              <Button variant="contained" color="primary" style={{margin:"3%"}}
                onClick={()=>{
                    setShowPopularTime(true);
                    setShowSales(false);
                    setShowCategorySales(false);
                    setShowProductSales(false);
                    setShowMostSales(false);
                    setShowCustomerOrders(false);
                }}
              >
                Popular Times
              </Button>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Container>
        {showSales && <SalesForm/>}
        {showCategorySales && <CategorySalesForm/>}
        {showProductSales && <ProductSalesForm/>}
        {showMostSales && <MostSalesForm/>}
        {showCustomerOrders && <CustomerOrdersForm/>}
        {showPopularTime && <ProductPopularTimeForm/>}
      </Container>
    </div>
  );
};

export default AdminPage;
