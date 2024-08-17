import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderTable from '../../components/OrderTable';
import { Typography } from '@mui/material';

function CustomerOrderReportPage() {
  const { year, quarter, customer } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make an API request to http://localhost:8000/sales/:year/:quarter and fetch data
    // Replace this with your actual API call
    fetch(`http://localhost:8000/orders/${year}/${quarter}/${customer}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data[0]);
        console.log(data[0]);
        });
  }, [year, quarter, customer]);

  return (
    <div>
      <Typography variant='h3' textAlign="center">Orders Report of Q{quarter} {year} of Customer {customer}</Typography>
      <OrderTable data={data} />
    </div>
  );
}

export default CustomerOrderReportPage;
