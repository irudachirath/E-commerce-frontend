import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SalesTable from '../../components/SalesTable';
import { Typography } from '@mui/material';

function CategorySalesReportPage() {
  const { year, quarter, category } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make an API request to http://localhost:8000/sales/:year/:quarter and fetch data
    // Replace this with your actual API call
    fetch(`http://localhost:8000/sales/${year}/${quarter}/c/${category}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data[0]);
        console.log(data[0]);
        });
  }, [year, quarter, category]);

  return (
    <div>
      <Typography variant='h3' textAlign="center">Sales Report for Q{quarter} {year} of Category{category}</Typography>
      <SalesTable data={data} />
    </div>
  );
}

export default CategorySalesReportPage;
