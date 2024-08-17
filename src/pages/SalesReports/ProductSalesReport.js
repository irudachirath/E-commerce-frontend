import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SalesTable from '../../components/SalesTable';
import { Typography } from '@mui/material';

function ProductSalesReportPage() {
  const { year, quarter, product } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make an API request to http://localhost:8000/sales/:year/:quarter and fetch data
    // Replace this with your actual API call
    fetch(`http://localhost:8000/sales/${year}/${quarter}/p/${product}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data[0]);
        console.log(data[0]);
        });
  }, [year, quarter, product]);

  return (
    <div>
      <Typography variant='h3' textAlign="center">Sales Report for Q{quarter} {year} of Product{product}</Typography>
      <SalesTable data={data} />
    </div>
  );
}

export default ProductSalesReportPage;
